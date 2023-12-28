import "./play-lists.css";

const PlayLists = (props) => {
  return (
    <section class="play-lists">
      <h2>{props.title}</h2>

      <div class="content">{props.children()}</div>
    </section>
  );
};

export default PlayLists;
