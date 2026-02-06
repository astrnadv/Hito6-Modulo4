import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2>Error</h2>
        <h1>404</h1>
        <p>
          La página que buscas no existe o está en construcción,
          por favor vuelve al inicio
        </p>
        <Link to="/" className={style.backBtn}>Volver</Link>
      </div>
    </div>
  );
};

export default NotFound;
