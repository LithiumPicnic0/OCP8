import {Outlet} from 'react-router-dom'
import {Footer} from './Footer'
import {Header} from './Header'


export function Root() {

  return <>
  
    <Header/>

    <main className="main_container">    
      <Outlet/>
    </main>
    <Footer/>
  </>
}