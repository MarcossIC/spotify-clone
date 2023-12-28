import "./libraryMenu.css";
import { IconTextButton, LanguageIcon } from "../../";
import LibSection from "./components/lib-section";
import LibTag from "./components/lib-tag";
import { createSignal } from "solid-js";

const LibIcon = () => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9061 1.03085L2.25432 7.21502C1.4506 7.86445 1 8.83854 1 9.84742V20.3886C1 20.6695 1.23936 21 1.65384 21H6.5C6.91448 21 7.15384 20.6695 7.15384 20.3886V15.4182C7.15384 14.3263 7.99894 13.5443 8.92307 13.5443H11.0769C12.001 13.5443 12.8462 14.3263 12.8462 15.4182V20.3886C12.8462 20.6695 13.0855 21 13.5 21H18.3462C18.7606 21 19 20.6695 19 20.3886V9.84631C19 8.83793 18.5499 7.86439 17.7462 7.215L10.0928 1.03039M9.9061 1.03085C9.90619 1.03079 9.90601 1.03093 9.9061 1.03085ZM9.9061 1.03085C9.9574 0.989775 10.0428 0.990098 10.0928 1.03039M10.0928 1.03039C10.0928 1.03042 10.0928 1.03036 10.0928 1.03039Z"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );
};

const LibMenu = () => {
  const [getActiveStyle, changeActive] = createSignal([
    { active: true, css: "flex-basis: 60%; text-align: left;" },
    {
      active: true,
      css: "margin-block-start: 1.5rem; margin-block-end: 1rem;",
    },
  ]);

  console.log("active:", getActiveStyle());
  return (
    <aside class="lib-menu" menu-card>
      <header>
        <h2>
          <LibIcon /> Tu Biblioteca
        </h2>
        <span>+</span>
      </header>

      <main>
        <LibSection
          title="Crea tu primera lista"
          text="Es muy facil, y te echaremos una mano."
          button="Crear lista"
        />
        <LibSection
          title="Encuentra podcasts que quieras seguir"
          text="Te avisaremos cuando salgan nuevos episodios"
          button="Explorar podcasts"
        />
      </main>

      <footer>
        <div class="tag-container">
          <LibTag uri="" text="Legal" />
          <LibTag uri="" text="Centro de Privacidad" />
          <LibTag uri="" text="Politica de Privacidad" />
          <LibTag uri="" text="Cookies" />
          <LibTag
            uri=""
            text="Informacion sobre los anuncios"
            style="width: 100%;"
          />
          <LibTag
            uri=""
            text="Accesibilidad"
            active={getActiveStyle()[0].active}
            styles={getActiveStyle()[0].css}
          />
        </div>

        <IconTextButton
          text={"Español España"}
          icon={LanguageIcon}
          active={getActiveStyle()[1].active}
          styles={getActiveStyle()[1].css}
        />
      </footer>
    </aside>
  );
};

export default LibMenu;
