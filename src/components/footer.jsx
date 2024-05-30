import React from "react";
import "./footer.css"; // Import external CSS file

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer"> {/* Apply footer class */}
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
