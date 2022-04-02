import React from "react";
import "./ReviewItem.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {  faTrashCan} from "@fortawesome/free-solid-svg-icons";
const ReviewItem = (props) => {
    const{product, handelRemoveProduct} =props
  const { name, price, img, shipping, quantity } = props.product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-items-container">
        <div className="review-items-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "...." : name}
          </p>
          <p>
            price: <span>$ {price}</span>
          </p>
          <p>
            Shipping: <span>$ {shipping}</span>
          </p>
          <p>
            quantity: <small>{quantity}</small>
          </p>
        </div>
        <div className="review-button">
          <button onClick={()=> handelRemoveProduct(product)} className="deleted-btn">
            <FontAwesomeIcon className="deleted-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};


export default ReviewItem;
