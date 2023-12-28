import { HomeMenu, LibMenu } from "../../components";
import "./home.css";
import  HomeMain from "./components/home-main";

const Home = () => {
  return (
    <main class="home">
      <section class="home-menus">
        <HomeMenu />
        <LibMenu />
      </section>

      <section class="home-main">
        <HomeMain />
      </section>
    </main>
  );
};

export default Home;
