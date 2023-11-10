import "../css/only-text.css";

function BoldText({ bold, text }) {
  return (
    <div className="only-text-container bold-text-container">
      <p className="onlytexto bold-onlytexto">
        <strong>{bold}</strong> {text}
      </p>
    </div>
  );
}

export default BoldText;
