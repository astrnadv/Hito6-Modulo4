import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addPizza = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id
            ? { ...p, count: p.count + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removePizza = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id
            ? { ...p, count: p.count - 1 }
            : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const total = useMemo(
    () =>
      cart.reduce(
        (acc, pizza) => acc + pizza.price * pizza.count,
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addPizza, removePizza, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
