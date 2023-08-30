import reactLogo from "./assets/react.svg";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";



export default function App() {

  //AREA DECLARATIVA
  let reactLogoTextoAlt = "Logo do React"

  return (
    <>
      {/* AREA IMPERATIVA */}
  
      <div>
        <Cabecalho/>
        <Conteudo reactLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt}/>
        <Rodape/>
      </div>
    </>
  )
}
