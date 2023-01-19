import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/" className="logo">
            TWM SEGUROS
          </Link>
          <ul>
            <li>
              <Link to="/client">Cliente</Link>
            </li>
            <li>
              <Link to="/tecnico">Tecnico</Link>
            </li>
            <li>
              <Link to="/tipo-servico">Tipo de Serviço</Link>
            </li>
            <li>
              <Link to="/ordem-servico">Ordem de Serviço</Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Root;
