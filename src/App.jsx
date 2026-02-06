import Navbar from "./componentes/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./componentes/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import CartProvider from "./context/CartContext";

const App = () => {

  return (
    <CartProvider>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/001" element={<Pizza />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>

  );
};

export default App;
