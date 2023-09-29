import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir";

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
          <table className={classes.tableStyle}>
            <thead>
              <tr className={classes.tableHeaderStyle}>
                <th className={classes.tableHeaderStyle}>ID</th>
                <th className={classes.tableHeaderStyle}>Nome</th>
                <th className={classes.tableHeaderStyle}>Descrição</th>
                <th className={classes.tableHeaderStyle}>Preço</th>
                <th className={classes.tableHeaderStyle}>Imagem</th>
                <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {listaProdutoLocal.map((produto, index) => (
                <tr key={index} className={classes.tableLineStyle}>
                  <td className={classes.tableDataStyle}>{produto.id}</td>
                  <td className={classes.tableDataStyle}>{produto.nome}</td>
                  <td className={classes.tableDataStyle}>{produto.desc}</td>
                  <td className={classes.tableDataStyle}>{produto.preco}</td>
                  <td className={classes.tableDataStyle}><img src={produto.img} alt={produto.desc} width={100}/></td>
                  <td className={classes.tableDataStyle}><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))} 
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className={classes.tableDataStyle}>Total de Produtos: {listaProdutoLocal.length}</td>
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