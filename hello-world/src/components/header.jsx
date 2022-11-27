import logo from '../logo.svg';
import '../App.css';

function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App Header
        </p>
      </header>
    </div>
  );
}

export default Header;
