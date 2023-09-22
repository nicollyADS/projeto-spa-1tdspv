import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InserirProdutos() {
  document.title = "CADASTRAR";

  const navigate = useNavigate();

  const [listaLocalProdutos, setListaLocalProdutos] = useState([{}]);
  let novoId;
  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setListaLocalProdutos(data);
      })
      .catch((error) => console.log(error));

    novoId = listaLocalProdutos[listaLocalProdutos.length - 1].id + 1;
  }, []);

  const [produto, setProduto] = useState({
    id: novoId,
    nome: "",
    desc: "",
    preco: "",
    img: "",
  });

  const handleChange = (event) => {
    //Destructuring
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    fetch("http://localhost:5000/produtos",{
        method: "POST",
        body: JSON.stringify(produto),
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then((response)=> response.json())
    .then((data)=>(console.log(data)))
    .catch(error => console.log(error));

     navigate("/produtos");
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Cadastrar Produto</legend>
            <div>
              <label htmlFor="idProd">Nome do Produto</label>
              <input
                type="text"
                name="nome"
                id="idProd"
                onChange={handleChange}
                value={produto.nome}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={handleChange}
                value={produto.desc}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                onChange={handleChange}
                value={produto.preco}
              />
            </div>
            <div>
              <label htmlFor="idImg">Imagem</label>
              <input
                type="url"
                name="img"
                id="idImg"
                onChange={handleChange}
                value={produto.img}
              />
            </div>
            <div>
              <button>CADASTRAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}