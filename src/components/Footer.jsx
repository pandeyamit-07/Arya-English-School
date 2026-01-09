import "../styles/Footer.css";
import logo from "../logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Left Section - School Info */}
        <div className="footer-section-left">
          <div className="footer-brand">
            <img src={logo} alt="Arya School logo" className="footer-logo" />
            <h2>Arya English High School</h2>
            <p className="footer-subtitle">& Junior College</p>
          </div>
        </div>

        {/* Center Section - About */}
        <div className="footer-section-center">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">Principal</a>
              </li>
              <li>
                <a href="#">Faculty</a>
              </li>
              <li>
                <a href="#">Activities</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="footer-section-right">
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="contact-info-inline">
              <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
              <p><strong>Email:</strong> contact@aryaschool.com</p>
            </div>
          </div>
        </div>

        {/* Map & Social */}
        <div className="footer-section-map">
          <div className="contact-map">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=240&fit=crop"
              alt="Location Map"
            />
          </div>
          <div className="social-links">
            <a href="#" title="Facebook">
              f
            </a>
            <a href="#" title="Twitter">
              𝕏
            </a>
            <a href="#" title="LinkedIn">
              in
            </a>
            <a href="#" title="WhatsApp">
              W
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2025 Arya English High School & Junior College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
