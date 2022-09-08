import { useContext } from "react";

import CartContext from "../../store/cart-context";
import { FaShoppingCart } from "react-icons/fa";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (

    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart className={classes['icon-cart']}/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
