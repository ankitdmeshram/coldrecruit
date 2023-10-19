import { Link } from "@remix-run/react";
const Header = () => {
  return (
    <header>
      <div className="gs-logo">Cold Recruit</div>

      <nav className="gs-nav">
        <div className="gs-menu">
          <div className="gs-menu-items">
            <Link to={"./"}>Home</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./internship"}>Internships</Link>
          </div>
          <div className="gs-menu-items">
            <Link to={"./jobs"}>Jobs</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
