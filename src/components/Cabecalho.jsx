import { Link } from "react-router-dom"

export default function Cabecalho() {

    return(
        <>
        <header>
          <h1>Vite + React / Coded By - RM552579</h1>
          <ul>
            <li><Link to="/"  ></Link></li>
            <li> <Link to="/Produtos" ></Link></li>
            <li> <Link to="/Produtos/editar" ></Link></li>
          </ul>
        </header>
        </>
    )

}