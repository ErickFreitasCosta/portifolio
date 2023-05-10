import "./contato.css";

function Contato() {
  return (
    <div className="container-contato">
      <div className="espaco">oi</div>

      <div className="container-fluid">
        <h1> Esssas são minhas redes sociais</h1>

        <br />

        <div className="container-sm">
          <a
            href="mailto:efreitas256@gmail.com"
            className="icone"
            target="_blank"
          >
            <i className="fa-regular fa-at fa-bounce"></i>
          </a>

          <a
            href="https://www.facebook.com/erick.costa.16100?mibextid=ZbWKwL"
            className="icone"
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-facebook fa-bounce"></i>
          </a>

          <a
            href="https://github.com/ErickFreitasCosta"
            className="icone"
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-github fa-bounce"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/erick-freitas-ba5615209/"
            className="icone"
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-linkedin fa-bounce"></i>
          </a>

          <a
            href="https://www.instagram.com/freitass____/"
            className="icone"
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-instagram fa-bounce"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contato;
