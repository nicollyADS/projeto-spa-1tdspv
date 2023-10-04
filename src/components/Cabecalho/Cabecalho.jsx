import { Link } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - rm552579</h1>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
        </ul>
      </header>
    </>
  );
}