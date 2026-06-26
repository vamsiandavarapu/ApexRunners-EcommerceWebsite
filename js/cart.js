// Cart State Management
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.taxRate = 0.08; // 8% tax
    this.init();
  }

  init() {
    this.updateBadge();
    // Render cart if on cart page
    if (document.getElementById('cart-items-container')) {
      this.renderCartPage();
    }
  }

  save() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.updateBadge();
  }

  addItem(product, size, color, quantity = 1) {
    const existingItem = this.items.find(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        colorway: product.colorway,
        size: size,
        color: color,
        quantity: quantity
      });
    }

    this.save();
    this.showToast(product.name, size, product.image);
  }

  removeItem(id, size, color) {
    this.items = this.items.filter(
      item => !(item.id === id && item.size === size && item.color === color)
    );
    this.save();
    if (document.getElementById('cart-items-container')) {
      this.renderCartPage();
    }
  }

  updateQuantity(id, size, color, delta) {
    const item = this.items.find(
      item => item.id === id && item.size === size && item.color === color
    );
    
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeItem(id, size, color);
      } else {
        this.save();
        if (document.getElementById('cart-items-container')) {
          this.renderCartPage();
        }
      }
    }
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getTotalCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  showToast(itemName, size, image) {
    // Remove any existing toasts
    const existing = document.querySelector('.premium-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'premium-toast';
    toast.innerHTML = `
      <div class="pt-header">
        <span class="pt-check">&#10003;</span>
        <span class="pt-title">Added to Cart!</span>
        <button class="pt-close" onclick="this.closest('.premium-toast').remove()">&times;</button>
      </div>
      <div class="pt-body">
        ${image ? `<img src="${image}" class="pt-img" alt="${itemName}">` : ''}
        <div class="pt-info">
          <div class="pt-name">${itemName}</div>
          <div class="pt-size">Size: ${size}</div>
        </div>
      </div>
      <a href="cart.html" class="pt-btn">View Cart &rarr;</a>
    `;

    // Inline styles for the popup (self-contained)
    const style = document.createElement('style');
    style.id = 'premium-toast-style';
    if (!document.getElementById('premium-toast-style')) {
      style.textContent = `
        .premium-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 320px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          z-index: 99999;
          overflow: hidden;
          animation: ptSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          font-family: 'Inter', sans-serif;
        }
        @keyframes ptSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes ptSlideOut {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(120%); opacity: 0; }
        }
        .premium-toast.hiding { animation: ptSlideOut 0.4s ease forwards; }
        .pt-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #E85D04, #ff8c42);
          color: white;
        }
        .pt-check {
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          width: 24px; height: 24px;
          display: flex; align-items: center; justify-content: center;
          font-weight: bold; font-size: 0.9rem;
        }
        .pt-title { font-weight: 700; font-size: 0.95rem; flex: 1; }
        .pt-close {
          background: none; color: white; font-size: 1.3rem;
          line-height: 1; cursor: pointer;
        }
        .pt-body {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px;
        }
        .pt-img {
          width: 70px; height: 70px;
          object-fit: contain;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.15));
          flex-shrink: 0;
        }
        .pt-name { font-weight: 700; font-size: 0.95rem; margin-bottom: 4px; color: #111; }
        .pt-size { font-size: 0.82rem; color: #888; }
        .pt-btn {
          display: block;
          text-align: center;
          padding: 12px;
          background: #111;
          color: white;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .pt-btn:hover { background: #E85D04; }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto-dismiss after 4s
    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="empty-cart" style="text-align: center; padding: 50px 20px;">
          <h3 style="margin-bottom: 20px;">Your cart is empty</h3>
          <a href="collection.html" class="btn btn-primary glass">Browse Products</a>
        </div>
      `;
      if(subtotalEl) subtotalEl.textContent = '$0.00';
      if(taxEl) taxEl.textContent = '$0.00';
      if(totalEl) totalEl.textContent = '$0.00';
      return;
    }

    container.innerHTML = this.items.map(item => `
      <div class="cart-item glass hover-lift">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 style="margin-bottom: 5px;">${item.name}</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">${item.colorway} | Size: ${item.size}</p>
          <div style="font-weight: 800; color: var(--primary); margin-bottom: 15px;">$${item.price.toFixed(2)}</div>
          
          <div style="display: flex; align-items: center; gap: 15px;">
            <div class="quantity-controls glass" style="display: inline-flex; border-radius: 100px; overflow: hidden; padding: 5px 15px;">
              <button onclick="cart.updateQuantity('${item.id}', '${item.size}', '${item.color}', -1)" style="font-size: 1.2rem; font-weight: bold; width: 20px;">-</button>
              <span style="font-weight: 600; width: 30px; text-align: center;">${item.quantity}</span>
              <button onclick="cart.updateQuantity('${item.id}', '${item.size}', '${item.color}', 1)" style="font-size: 1.2rem; font-weight: bold; width: 20px;">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-close" onclick="cart.removeItem('${item.id}', '${item.size}', '${item.color}')">✕</button>
      </div>
    `).join('');

    const subtotal = this.getSubtotal();
    const tax = subtotal * this.taxRate;
    const total = subtotal + tax;

    if(subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if(taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if(totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }
}

// Initialize global cart object
const cart = new Cart();
