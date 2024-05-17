import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Root } from './components/Root/Root'
import { About } from './pages/About'
import { Lodging }  from './pages/Lodging'
import ErrorPage from './pages/Error'

import lodgingData from "./assets/logements.json" //// fichier JSON contenant les données des logements
import './assets/css/style.css' //// Feuille de style à utiliser pour tout les composants React




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home data={lodgingData}/>
      },
      {
        path:'lodging/:id',
        element: <Lodging data={lodgingData}/>,
      },
      {
        path:'about',
        element: <About/>
      },     
      {
        path:'/*',
        element: <ErrorPage/>
      }
    ]
  }
  
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
