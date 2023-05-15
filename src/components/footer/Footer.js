import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Steamcito</h4>
            <ul>
              <li>About us</li>
              <li>Our services</li>
              <li>Privacy policy</li>
              <li>Affiliate program</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>FAQ</li>
              <li>Games</li>
              <li>Server status</li> 
              <li>Order status</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Created by:</h4>
            <ul>
              <li></li>
              <li>Esteban</li>
              <li>Lucio</li>
              <li>Mora</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="">All rights reserved</a>
              <p className="copy">&copy;{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
