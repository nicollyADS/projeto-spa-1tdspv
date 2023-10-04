import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const rota = useLocation();

  return (
    <>
      <header className="cabecalho">
        <ul>
          <li>
            <Link to="/" className={rota.pathname == "/" ? "active" : ""} >HOME</Link>
          </li>
          <li>
            <Link to="/produtos" className={rota.pathname == "/produtos" ? "active" : ""} >PRODUTOS</Link>
          </li>
        </ul>
      </header>
    </>
  );
}