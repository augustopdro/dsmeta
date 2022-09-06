import logo from "../../assets/img/logo.svg";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/pedro-viana-b13625106">
            {" "}
            Pedro Viana
          </a>
        </p>
      </div>
    </header>
  );
}
