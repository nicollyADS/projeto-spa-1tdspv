import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Conteudo from "./components/Conteudo"
import { Outlet } from "react-router-dom";

export default function App() {
  


  return (
    <>
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </>
  )
}
