import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "../pages/home";
import Navbar from "../components/navbar";
import Sobree from "../pages/Sobre";
import Projetos from "../pages/projetos";
import Contato from "../pages/contato";
import Footer from "../components/footer";



function RoutesAPP(){
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobree/>}/>
                <Route path="/Projeto" element={<Projetos/>}/>
                <Route path="Contato" element={<Contato/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      
    </div>
  )
}

export default RoutesAPP
