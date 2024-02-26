import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="NavContent">
        <div className="Logo">PORTFOLIO</div>
        <div className="NavItem">
          <ol>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default Nav;
