import { useState } from "react";

function ProductDetails() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  function calculateTotal  ()  {
    const totalPrice = (price) * (quantity);
    let discount = 0;

    if ((quantity) >= 30) {
      discount = 0.15;
    } else if ((quantity) > 20) {
      discount = 0.10;
    } else if ((quantity) > 10) {
      discount = 0.05;
    }

    const discountedPrice = totalPrice * (1 - discount);
    setTotal(discountedPrice);
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={calculateTotal}>Calculate Total</button>
      <div>
         <h3>Total Amount: {(total)}</h3>
      </div>
    </div>
  );
}

export default ProductDetails;
