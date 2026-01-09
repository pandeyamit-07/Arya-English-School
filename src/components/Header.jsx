import { Link } from "react-router-dom";
import logo from "../logo.png";

function Header() {
  const handleGalleryClick = (e) => {
    e.preventDefault();
    const url = window.location.origin + "/gallery";
    window.open(url, "_blank");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Arya School logo" className="logo-img" />
        <div className="logo-text">
          <h2>Arya English High School</h2>
          <small>&amp; Junior College</small>
        </div>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="/gallery" onClick={handleGalleryClick} className="apply-btn">Gallery</a>
      </nav>
    </header>
  );
}
export default Header;
