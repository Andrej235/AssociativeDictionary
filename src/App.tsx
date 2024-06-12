import { Outlet, useNavigate } from "react-router-dom";
import "./App.scss";
import HamburgerNavigationMenu from "./Components/HamburgerNavigationMenu/HamburgerNavigationMenu";
import Icon from "./Components/Icon/Icon";
import useFloatingText from "./Components/UseFloatingText";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const titleJumpAnimation = useFloatingText("#site-title");

  useEffect(() => {
    const interval = setInterval(
      titleJumpAnimation,
      20000 + Math.random() * 20000
    );
    return () => clearInterval(interval);
  }, [titleJumpAnimation]);

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
        <h1 id="site-title" onMouseOver={titleJumpAnimation}>
          Asocijativni Recnik
        </h1>
        <Icon id="logo" name="book" onClick={() => navigate("/")} />
      </header>

      <section id="page-content">
        <Outlet />
      </section>
    </section>
  );
}

export default App;
