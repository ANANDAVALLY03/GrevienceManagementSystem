import "./Header.css";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <header className="header">
       <img
        src={logo}
        alt="HGCL Logo"
        className="header-logo"
      />
      <h2>Grievance Management System</h2>
      <div className="header-user">
        Admin User
      </div>
    </header>
  );
}

export default Header;