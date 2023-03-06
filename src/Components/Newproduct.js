import React from "react";

function Newproduct() {
  return (
    <div>
      <h1 className="add-new-product">Add new Product</h1>

      <div className="new-product">
        <h3 className="new-product-product"> Product</h3>

        <form action="">
          <label className="new-input-label">product Name</label>
          <br />
          <input
            type="text"
            className="product-input"
            placeholder="input text"
            size="50"
          />
          <br />
          <p className="input-info">The name is how it appears on your site</p>
          <label className="new-input-label">product By</label>
          <br />
          <input
            type="text"
            className="product-input"
            placeholder="input text"
            size="25"
          />
          <br />
          <p className="input-info">This is a hint text to help user.</p>
          <label className="new-input-label">product Price</label>
          <br />
          <input
            type="text"
            className="product-input"
            placeholder="input text"
            size="50"
          />
          <br />
          <p className="input-info">The name is how it appears on your site</p>
          <label className="new-input-label new-offer">Offer</label>
          <br />
          <input
            type="text"
            className="product-input new-offer-input"
            placeholder="input text"
            size="50"
          />
          <br />
          <p className="input-info">This is a hint text to help user</p>
          <label className="new-input-label">Short Description</label>
          <br />
          <input
            type="text"
            className="product-input new-fdes"
            placeholder="input text"
            size="130"
          />
          <br />
          <p className="input-info"></p>
        </form>
      </div>
    </div>
  );
}

export default Newproduct;
