const LibSection = (props) => {
  return (
    <section class="lib-section">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button type="button">{props.button}</button>
    </section>
  );
};

export default LibSection;
