import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="RZA Logo" className="logo" />
      <h1>Riget Zoo Adventures</h1>
    </header>
  );
}