import { ListaProdutos } from "../components/ListaProdutos";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";

export default function Produtos() {

    document.title = "Lista de Produtos";

    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>

        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.desc}</td>
                  <td>{produto.preco}</td>
                  <td><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Total de Produtos: {ListaProdutos.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }
  