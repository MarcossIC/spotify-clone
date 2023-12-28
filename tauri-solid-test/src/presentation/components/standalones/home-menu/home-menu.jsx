import { Navigate, HomeIcon, SearchIcon } from "../../";
import "./home-menu.css";

const HomeMenu = () => {
  return (
    <aside menu-card>
      <div>
        <img
          src="/spoty.svg"
          itemProp="image"
          alt="Spotify Logo"
          width="88px"
          loading="eager"
        />
      </div>

      <nav>
        <Navigate navigate text="Inicio" icon={HomeIcon} />
        <Navigate navigate text="Buscar" icon={SearchIcon} />
      </nav>
    </aside>
  );
};

export default HomeMenu;
