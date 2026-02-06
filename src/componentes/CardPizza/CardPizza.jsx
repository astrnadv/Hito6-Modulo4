import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CardPizza.css";

const CardPizza = ({ pizza }) => {
  const { addPizza } = useContext(CartContext);
  const { name, price, ingredients, img } = pizza;

  return (
    <div className="cardPizza">
      <img src={img} alt={name} />

      <div className="padding">
        <h3>{name}</h3>
        <hr />

        <p>Ingredientes</p>
        <p className="ingredients-text">
          🍕 {ingredients.join(" · ")}
        </p>

        <p className="price">
          Precio: ${price.toLocaleString("es-CL")}
        </p>

        <div className="buttons">
          <button className="btn-info">Ver más</button>
          <button
            className="btn-add"
            onClick={() => addPizza(pizza)}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
