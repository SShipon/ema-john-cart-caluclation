import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart.jsx';
import useProduct from '../../hooks/useProducts.jsx';
import { removeFromDb } from '../../utilities/fakedb.js';
import './Order.css'
import Cart from '../Cart/Cart.js';
import ReviewItem from '../ReviewItem/ReviewItem.jsx';

const Order = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)
    
    const handelRemoveProduct = product => {
        const rest= cart.filter(pd=>pd.id !==product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
      <div className="shop-container">
        <div className="reviewItem-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handelRemoveProduct={handelRemoveProduct}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/shipment">
                <button>Proceed Shipping </button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Order;