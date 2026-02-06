import { useEffect, useState } from "react";
import Header from "../../componentes/Header/Header";
import CardPizza from "../../componentes/CardPizza/CardPizza";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="home-container">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;
