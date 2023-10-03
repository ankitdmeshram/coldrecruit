import { Link } from "@remix-run/react";
const Header = () => {
  return (
    <header>

      <div className="gs-logo">
        Cold Recruit
      </div>

      <nav className="gs-nav">
        <div className="gs-menu">
          <div className="gs-menu-items">
            <Link to={"./"}>Home</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./"}>Internships</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./"}>Jobs</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./"}>About</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./"}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
