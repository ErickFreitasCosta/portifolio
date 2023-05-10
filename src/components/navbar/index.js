import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../../images/logoIn.png";
import OffcanvasExample from "../NavbarRes";

function Navbar() {
  return (
    <div className="containerNav">
      <div className="Logo">
        <img src={Logo} alt="logo" className="img-logo" />
      </div>

      <div className="title-container">
        <h3 className="h3">
          <Link to={"/"} className="h3">
            Home
          </Link>
        </h3>
        <h3 className="h3">
          <Link to={"/Sobre"} className="h3">
            Sobre
          </Link>
        </h3>
        <h3 className="h3">
          <Link to={"/Projeto"} className="h3">
            Projetos
          </Link>
        </h3>
        <h3 className="h3">
          {" "}
          <Link to={"/Contato"} className="h3">
            Contato
          </Link>
        </h3>
      </div>
      <OffcanvasExample />
    </div>
  );
}
export default Navbar;
