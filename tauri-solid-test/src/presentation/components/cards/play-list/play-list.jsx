const PlayListCard = (props) => {
  const [imageSrc, setImageSrc] = createSignal("");

  const loadImageSrc = async () => {
    const response = await fetch(
      "https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134504/Spotify-Cover-Art-with-Text-Aligned-480x480.png"
    );
    const data = await response.blob();
    const url = URL.createObjectURL(data);
    setImageSrc(url);
  };
  createEffect(() => loadImageSrc());

  return (
    <article class="play-list-card">
      <header>
        <img
          loading="eager"
          src={imageSrc()}
          alt="play list cover image"
          itemProp="image"
          role="img"
        ></img>
      </header>
      <main>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </main>
    </article>
  );
};

export default PlayListCard;
