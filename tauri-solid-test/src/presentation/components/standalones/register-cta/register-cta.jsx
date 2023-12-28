import "./register-cta.css";
import { DefaultButton } from "../../";
import { createSignal } from "solid-js";

const RegisterCta = () => {
  const [getStyles, setSyles] = createSignal("");

  return (
    <aside class="register-cta">
      <section>
        <h3>Muestra de Spotify</h3>
        <p>
          Registrate para disfrutar de canciones y podcasts sin limites, con
          anuncios ocacionales. No hace falta tarjeta de credito.
        </p>
      </section>
      <DefaultButton text="" isFilled={true} extraStyles={getStyles()} />
    </aside>
  );
};

export default RegisterCta;
