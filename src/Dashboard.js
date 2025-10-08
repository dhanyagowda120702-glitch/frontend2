import React, { useState } from "react";
import "./styles.css";

export default function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", stock: 10, price: 100 },
    { id: 2, name: "Product B", stock: 5, price: 150 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    price: "",
  });

  const [search, setSearch] = useState("");

  const addProduct = () => {
    if (!newProduct.name || !newProduct.stock || !newProduct.price) {
      alert("Please fill all fields");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        stock: parseInt(newProduct.stock),
        price: parseFloat(newProduct.price),
      },
    ]);
    setNewProduct({ name: "", stock: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Inventory Dashboard</h1>

      {/* SEARCH BAR */}
      <div>
        <input
          className="input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ADD PRODUCT FORM */}
      <div>
        <h2>Add Product</h2>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button className="button" onClick={addProduct}>
          Add Product
        </button>
      </div>

      {/* STOCK LEVELS TABLE */}
      <div>
        <h2>Stock Levels</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>${product.price}</td>
                <td>
                  <button className="button" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LOW STOCK ALERTS */}
      <div>
        <h2>Low Stock Alerts</h2>
        <ul>
          {products
            .filter((product) => product.stock < 5)
            .map((product) => (
              <li key={product.id} className="low-stock">
                {product.name} is low on stock!
              </li>
            ))}
        </ul>
      </div>

      {/* SALES HISTORY */}
      <div>
        <h2>Sales History</h2>
        <p>No sales data yet.</p>
      </div>
    </div>
  );
}


