import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - RM552579</h1>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
          <li>
            <Link to="/inserir/produtos/">CADASTRAR PRODUTO</Link>
          </li>
        </ul>
      </header>
    </>
  );
}