import { HomeMenu, LibMenu } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <main class="home">
      <section class="home-menus">
        <HomeMenu />
        <LibMenu />
      </section>

      <section class="home-main">
        <p>Test</p>
      </section>
    </main>
  );
};

export default Home;
