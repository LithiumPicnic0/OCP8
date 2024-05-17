import { NavLink } from "react-router-dom"

 
export default function ErrorPage() {

  return <>        
            <div className='error_container'>
              <h1 className='error_title'>404</h1>
              <p className='error_subtitle'>{`Oups! La page que vous demandez n'existe pas.`}</p>
              <NavLink className="error_link" to="/">{`Retourner sur la page d'accueil`}</NavLink>
            </div>
  </>
} 

