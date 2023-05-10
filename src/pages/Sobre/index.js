
import "./sobre.css";

// Imagens
import HTML from "../../images/html5.png";
import CSS from "../../images/css3.png";

function Sobree() {
  return (
    <div className="container-s">
      <div className="cont"></div>

      <div className="container-s">
        <h3 className="texto-title-h3">Um pouco sobre</h3>

        <p className="texto-p">
          Olá, meu nome é Erick Freitas e eu sou desenvolvedor front-end.
          Atualmente, estou trabalhando na área há 5 meses e já tenho
          experiência em várias tecnologias como HTML, CSS, JS, React e
          Firebase. Eu também tenho habilidades em Bootstrap e Bootstrap-React,
          o que me permite criar designs responsivos e modernos para qualquer
          tipo de projeto.
          <img src={CSS} className="css" alt="css" />
          Como desenvolvedor front-end, estou apaixonado por criar experiências
          de usuário incríveis, utilizando tecnologias modernas e práticas de
          desenvolvimento ágeis. Minha experiência em React me permite criar
          aplicações interativas e dinâmicas com facilidade, enquanto o Firebase
          me permite integrar recursos em tempo real em qualquer aplicação que
          estou construindo.
          <img src={HTML} className="html" alt="html" />
          Além disso, minha experiência com Bootstrap me permite criar designs
          responsivos e de alta qualidade, que funcionam em qualquer dispositivo
          ou tela. Isso me permite entregar projetos com rapidez e eficiência,
          mantendo a qualidade em todos os aspectos. Em resumo, como
          desenvolvedor front-end, tenho um conjunto diversificado de
          habilidades técnicas e uma forte paixão por criar designs atraentes.
        </p>

        <p className="texto-p">
          Como voluntário civil no Comando Geral da PM-PA, eu estou envolvido em
          projetos de desenvolvimento front-end, utilizando minhas habilidades
          em HTML, CSS, JS, React e Firebase. Através dessa experiência, tenho a
          oportunidade de aprender e aprimorar suas habilidades de forma
          direcionada, obtendo conhecimentos valiosos no campo do web design. A
          presença de orientadores no Comando Geral da PM-PA oferece uma
          vantagem significativa, pois posso contar com o suporte de
          profissionais que fornecem orientações precisas e eficientes. Isso
          ajuda a acelerar meu aprendizado, permitindo assim ser um
          desenvolvedor front-end mais qualificado e capaz de enfrentar os
          desafios do mercado atual de tecnologia.
        </p>
      </div>
    </div>
  );
}
export default Sobree;