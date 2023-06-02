import "./footerStyle.css";

function Footer() {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid footer-p" id="footer-p">
        <a className="navbar-brand" href="#" id="footerLetra">
          <i>  <p className="footer-nome"> &copy; Direitos reservados - By Erick</p></i>
        </a>
      </div>
    </nav>
  );
}
export default Footer;
