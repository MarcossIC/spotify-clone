import "./navigation.css";

const NavigationButton = (props) => {
  return (
    <button navigation type="button" disabled={props.isDisabled}>
      <span class="text-btn">{props.icon}</span>
    </button>
  );
};

export default NavigationButton;
