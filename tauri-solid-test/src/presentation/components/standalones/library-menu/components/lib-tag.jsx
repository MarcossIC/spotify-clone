const LibTag = (props) => {
  return (
    <a
      class="tag"
      href={props.uri}
      target="_blank"
      style={props.active ? props.styles : ""}
    >
      {props.text}
    </a>
  );
};

export default LibTag;
