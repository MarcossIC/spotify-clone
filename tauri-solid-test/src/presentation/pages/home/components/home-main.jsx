import "./home-main.css";
import {
  PlayLists,
  DefaultButton,
  NavigationButton,
  PlayListCard,
} from "../../../components";
import { createSignal } from "solid-js";

const HomeMain = () => {
  const [getStyles, setStyles] = createSignal(
    "padding-block: .875rem; padding-inline: 1.75rem;"
  );

  return (
    <>
      <header class="home-main-header">
        <div class="navigation">
          <NavigationButton icon={"<"} isDisabled={true} />
          <NavigationButton icon={">"} isDisabled={true} />
        </div>

        <div class="buttons">
          <DefaultButton
            text="Registrate"
            isFilled={false}
            extraStyles={getStyles()}
          />
          <DefaultButton
            text="Iniciar sesion"
            isFilled={true}
            extraStyles={getStyles()}
          />
        </div>
      </header>
      <main class="home-main-content">
        <PlayLists
          title="Listas de repoduccion"
          children={() => {
            return (
              <>
                <PlayListCard
                  title="Happy Hits!"
                  text="Hits to boost your mood and fill tou with happiness!"
                />
                <PlayListCard
                  title="Calming Acoustic"
                  text="Keep calm with instrumental acoustic..."
                />
                <PlayListCard
                  title="Pop Rising"
                  text="Who's now and next in pop. Cover FLETCHER"
                />
                <PlayListCard
                  title="lofi chill"
                  text="Lazy slow lofi beatts for laid-back moments."
                />
              </>
            );
          }}
        />
      </main>
    </>
  );
};

export default HomeMain;
