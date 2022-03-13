import "./Button.css";

const Button = (props) => {
  return (
    <div className="ButtonContainer">
      <button className="Button" onClick={() => props.random(1, 7)}>
        Play
      </button>
    </div>
  );
};

export default Button;
