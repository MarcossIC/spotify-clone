import "./default-button.css";
const DefaultButton = (props) => {
  return (
    <button
      type="button"
      class={props.isFilled ? "default-button filled" : " default-button"}
      style={props.extraStyles}
    >
      {props.text}
    </button>
  );
};

export default DefaultButton;
