import "../css/header-text.css";

function HeaderText({ header, text }) {
  return (
    <div className="header-text-comp-container">
      <p className="header">{header}</p>
      <p className="texto">{text}</p>
    </div>
  );
}

export default HeaderText;
