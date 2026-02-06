import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Pizza.module.css";

const Pizza = () => {
  const { id } = useParams(); // 👈
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className={style.contenedorPizza}>
      <img src={pizza.img} alt={pizza.name} className={style.imagenPizza} />

      <div className={style.infoPizza}>
        <h2>{pizza.name}</h2>
        <p className={style.descripcion}>{pizza.desc}</p>

        <h4>Ingredientes:</h4>
        <ul>
          {pizza.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h3>Precio: ${pizza.price}</h3>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;
