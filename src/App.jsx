import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
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
