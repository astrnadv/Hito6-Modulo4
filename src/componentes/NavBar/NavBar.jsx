import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav>
      <h2 className="nombrePizzeria">Pizzería Mamma Mía</h2>

      <Link to="/" className="nav-btn">
        🍕 Home
      </Link>

      {token ? (
        <>
          <Link to="/profile" className="nav-btn">🔓 Profile</Link>
          <button className="nav-btn">🔒 Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-btn">🔐 Login</Link>
          <Link to="/registro" className="nav-btn">🔐 Registro</Link>
        </>
      )}

      <Link to="/cart" className="nav-btn total">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;
