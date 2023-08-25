import ReactLogo from "./assets/react.svg"
import Cabecalho from "./components/cabecalho"

let reactLogoTextoAlt = "Logo do React"

export default function App() {

  //AREA DECLARATIVA


  return (
    <>
      {/* AREA IMPERATIVA */}
  
      <div>
        <Cabecalho></Cabecalho>
        <session>
          <div>
            <p>sdsdsd</p>
            <p>jdskdjs</p>
            <p>dsdshd</p>
            <img src={ReactLogo} alt={reactLogoTextoAlt} />
          </div>
        </session>

        <footer>
          <div>
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </footer>


      </div>
    </>
  )
}
