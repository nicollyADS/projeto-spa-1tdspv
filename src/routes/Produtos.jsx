import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir";
import "./Produtos.scss";

export default function Produtos() {

    document.title = "Lista de Produtos";

    const [listaProdutoLocal, setListaProdutoLocal] = useState([{}])

    useEffect(()=>{

        fetch('http://localhost:5000/produtos',{

          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
          },
        }).then((response)=> response.json())
        .then((data)=>{
            setListaProdutoLocal(data);
        })
        .catch((err)=>console.log(err));
      
    },[]);

    const [open, setOpen] = useState(false);

    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>
        
        {open ? <ModalInserir open={open} setOpen={setOpen}/> : ""}

      <Link onClick={()=> setOpen(true)}>Cadastrar Produtos</Link>

        <div>
          <table className="tableStyle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Imagem</th>
                <th>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {listaProdutoLocal.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.desc}</td>
                  <td>{produto.preco}</td>
                  <td><img src={produto.img} alt={produto.desc} width={100}/></td>
                  <td><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))} 
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">Total de Produtos: {listaProdutoLocal.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }

  
//   <div>
//   <button onClick={()=> setCount(count + 1)}>COUNTER - {count}</button>
// </div>

  
  // const [exemplo, setExemplo] = useState([{}]);
  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   console.log("Use-Effect que será sempre renderizado!");
  // });
  
  // useEffect(()=>{
  //   console.log("Use-Effect que será renderizado o objeto ou componente ou elemento que está no array de depenências sofrer atualização.");
  // },[count]);