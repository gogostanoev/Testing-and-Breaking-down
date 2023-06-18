import './Header.css';

const Header = () => {
  const navLinks = ['Home', 'About', 'Contact'];
  const webTitle = 'VIDEO GAMES';

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="left-links">
            <input type="text" id="search" name="search" placeholder="Search" />
          </div>
          <div className="center-link">
            <h1>{webTitle}</h1>
          </div>
          <div className="right-links">
            <ul className="navLinks">
              {navLinks.map((link) => {
                return <li key={link}>{link}</li>;
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
