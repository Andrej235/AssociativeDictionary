import { Outlet, useNavigate } from "react-router-dom";
import "./App.scss";
import HamburgerNavigationMenu from "./Components/HamburgerNavigationMenu/HamburgerNavigationMenu";
import Icon from "./Components/Icon/Icon";

function App() {
  const navigate = useNavigate();

  return (
    <section id="page">
      <header>
        <HamburgerNavigationMenu
          id="navigation"
          items={[
            {
              name: "Pretraga",
              path: "/",
            },
            {
              name: "Arhiva",
              path: "/words",
            },
            {
              name: "O Sajtu",
              path: "/about",
            },
          ]}
        />
        <h1 id="site-title">Asocijativni Recnik</h1>
        <Icon id="logo" name="book" onClick={() => navigate("/")} />
      </header>

      <section id="page-content">
        <Outlet />
      </section>
    </section>
  );
}

export default App;
