import "./home.css";

// Imagens
// import euGit from '../../images/eubit.gif'
import EuHome from "../../images/EuHome.jpeg";

function Home() {
  return (
    <div className="container4">
      <div className="container2"></div>

      <div className="Home">
        <div className="box1">
          <p className="title-home">
            {" "}
            <q>HELLO WORLD!</q>, MEU NOME É ERICK FREITAS.{" "}
          </p>
          <p className="title-home">Essas são as minhas Skills.</p>

          <div className="icone-home">
            <p className="icon-home">
              <i className="fa-brands fa-html5 cor"></i>
            </p>
            <p className="icon-home">
              <i className="fa-brands fa-css3-alt cor2"></i>
            </p>
            <p className="icon-home">
              <i className="fa-brands fa-js cor"></i>
            </p>
            <p className="icon-home">
              {" "}
              <i className="fa-brands fa-react cor2"></i>
            </p>
            <p className="icon-home">
              {" "}
              <i className="fa-brands fa-bootstrap cor"></i>
            </p>
          </div>

          <div className="icone-home">
            <p className="icon-home">
              {" "}
              <i className="fa-brands fa-github cor"></i>
            </p>
            <p className="icon-home">
              {" "}
              <i className="fa-brands fa-git cor2"></i>
            </p>
            <p className="icon-home">
              {" "}
              <i className="fa-solid fa-database cor"></i>
            </p>
          </div>
        </div>

        <div className="box2">
          <img src={EuHome} className="Eu" alt="Erick" />
          <div className="Fundo"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
