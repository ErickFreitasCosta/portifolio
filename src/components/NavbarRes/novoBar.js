import btn from "../script";
import { Link } from "react-router-dom";
import '../../index.css'
import './style.css'

function Nome() {
  
    return (
      
     
        <header>
          <nav className='navigation'>
            <a href='#' className='logo'> P<span>ortifóli</span>O</a>
  
            <ul className='nav-menu'>
                  <Link to={'/'} className='h4'><p className="nav">Home</p></Link>
                  <Link to={'/Sobre'} className='h5' ><p className="nav
                  ">Sobre</p></Link>
                  <Link to={'/Projeto'} className='h4'><p className="nav
                  ">Projetos</p></Link>
                  <Link to={'/Contato'} className='h5'><p className="nav
                  ">Contato</p></Link>
        
            </ul>
  
            <div className='menu'>
  
              <button onClick={btn}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
                
              </button>
            </div>
  
          </nav>
        </header>
  
      
    );
  }
  
  export default Nome;