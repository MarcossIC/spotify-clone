import "./navigate.css";

const Navigate = (props) => {
  return (
    <a navigate>
      {props.icon}

      <span>{props.text}</span>
    </a>
  );
};

export default Navigate;
