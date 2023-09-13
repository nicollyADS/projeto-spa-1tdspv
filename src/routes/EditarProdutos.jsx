import { useNavigate, useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "EDITAR PRODUTOS" + id;

    const navigate = useNavigate()

    const produtoRetornadoDoFiltro = ListaProdutos.filter(produto => produto.id == id)[0];

    const [produto, setProduto] = useState({
      id: produtoRetornadoDoFiltro.id,
      nome: produtoRetornadoDoFiltro.nome,
      desc: produtoRetornadoDoFiltro.desc,
      preco: produtoRetornadoDoFiltro.preco
    });

    const handleChange = (event) =>{

      const {name, value} = event.target;

      setProduto({...produto,[name]:value});
      
    }

    const handleSubmit = (event) =>{
      event.preventDefault();

      let indice;

      ListaProdutos.forEach((item,index)=>{
        if(item.id == id){
          indice = index;
        }
      });

      ListaProdutos.splice(indice,1,produto);
        navigate("/produtos")
    }

    return (
      <div>
          <h1>EditarProdutos</h1>

          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <input type="hidden" name="id" onChange={handleChange} Value={produto.id}/>
                <div>
                    <label htmlFor="idProd">Nome do Produto</label>
                    <input type="text" name="nome" id="idProd" onChange={handleChange} Value={produto.nome} />
                </div>
                <div>
                    <label htmlFor="idDesc">Descrição</label>
                    <input type="text" name="desc" id="idDesc" onChange={handleChange} Value={produto.desc} />
                </div>
                <div>
                    <label htmlFor="idPreco">Preco</label>
                    <input type="text" name="preco" id="idPreco" onChange={handleChange} Value={produto.preco} />
                </div>
                <div>
                  <button>Editar</button>
                </div>
              </fieldset>
            </form>
          </div>

          <div>
            <p>Nome : {produto.nome}</p>
            <p>Desc : {produto.desc}</p>
            <p>Preço : {produto.preco}</p>
          </div>
      </div>
    )
  }