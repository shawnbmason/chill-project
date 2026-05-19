// Import React hooks
// useState = stores changing data
// useMemo = optimizes calculations
import React, { useMemo, useState } from "react";
import "../Styles/shoppingSidebar.css";
import { Link } from "react-router-dom";

// Product list shown on the store page
// Each object represents one product
const products = [
  {
    id: 1,
    name: "Everyday Hoodie",
    color: "Heather Gray",
    size: "M",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 2,
    name: "Canvas Tote",
    color: "Natural",
    size: "One Size",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 3,
    name: "Ribbed Socks",
    color: "Black",
    size: "L",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 4,
    name: "Classic Sneakers",
    color: "White",
    size: "10",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=240&q=80",
  },
];

const initialItems = [];

// Converts numbers into USD currency format
// Example: 68 -> $68.00
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// Main shopping cart component
export default function ShoppingSidebar() {
  // Controls whether the cart sidebar is visible
  const [isOpen, setIsOpen] = useState(false);
  // Stores cart items currently added by the user
  const [items, setItems] = useState(initialItems);

  // Calculates total number of items in the cart
  const itemCount = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  // Calculates the total cart price
  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  // Increases item quantity by 1
  const increaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decreases item quantity by 1
// Removes item completely if quantity becomes 0
  const decreaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Removes an item completely from the cart
  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  // Adds products into the shopping cart
// If the product already exists, increase quantity instead
  const addToCart = (product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });

    setIsOpen(true);
  };

  // JSX UI rendered on the screen
  return (
    <div className="shop-page">
      {/* Top navigation/header area */}
      <header className="shop-header">
        <div>
          <h1>The Shop</h1>
        </div>

        <button className="cart-open-btn" onClick={() => setIsOpen(true)}>
          🛒 Cart
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
      </header>

      {/* Product section displayed on the page */}
      <main className="shop-content">
        <h2>Featured Products</h2>
        <p className="products-subtitle">
          Click any product below to add it to your shopping cart.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>
                  {product.color} · Size {product.size}
                </p>

                <div className="product-bottom">
                  <strong>{formatCurrency(product.price)}</strong>

                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)} />}

      {/* Shopping cart sidebar */}
      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div>
            <h2>Shopping Cart</h2>
            <p>
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </p>
          </div>

          <button className="icon-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add something you love and it will appear here.</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {item.color} · {item.size}
                      </p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑
                    </button>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>

                    <strong>{formatCurrency(item.price * item.quantity)}</strong>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="summary-row muted">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <button className="checkout-btn" disabled={items.length === 0}>
            Checkout
          </button>
          <button className="continue-btn" onClick={() => setIsOpen(false)}>
            Continue Shopping
          </button>
        </div>
      </aside>
    </div>
  );
}
