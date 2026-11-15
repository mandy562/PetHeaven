import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Pet <span>Heaven</span></h2>
          <p>
            Every pet deserves love, care,
            <br/>and a safe place to call home.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Get Involved</h3>
          <Link to="/adopt">Adopt a Pet</Link>
          <Link to="/release">Release a Pet</Link>
        </div>

        <div className="footer-contact">
          <h3>Follow Us</h3>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Pet Heaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;