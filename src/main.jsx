import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//importando os componentes
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './routes/Error.jsx';

const router = createBrowserRouter([
  {path: "/", element:<App/>, errorElement:"<Error/>", children:[
    {path: "/", element:<Home/>},
    {path: "/produtos", element:<Produtos/>},
    {path: "/produtos/editar", element:<EditarProduto/>}

  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
