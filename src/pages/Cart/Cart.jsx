import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./Cart.module.css";

const Cart = () => {
  const { cart, addPizza, removePizza, total } = useContext(CartContext);

  return (
    <div className={style.cartContainer}>
      <h2 className={style.cartTitle}>Detalles del pedido</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className={style.cartItem}>
          <img src={pizza.img} className={style.cartImage} />

          <span className={style.cartName}>{pizza.name}</span>

          <span className={style.cartPrice}>
            ${pizza.price.toLocaleString("es-CL")}
          </span>

          <div className={style.contador}>
            <button
              className={style.btnRestar}
              onClick={() => removePizza(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className={style.btnSumar}
              onClick={() => addPizza(pizza)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className={style.total}>
        Total: ${total.toLocaleString("es-CL")}
      </div>

      <button className={style.payButton}>Pagar</button>
    </div>
  );
};

export default Cart;
