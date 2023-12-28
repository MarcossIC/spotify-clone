import "./icon-text.css";

const IconTextButton = (props) => {
  return (
    <button
      class="icon-text-btn"
      type={props.type}
      style={props.active ? props.styles : ""}
    >
      {props.icon} {props.text}
    </button>
  );
};

export default IconTextButton;
