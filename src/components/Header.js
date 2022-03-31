import logo from '../assets/logo.svg';

export const Header = ({userName}) => {
  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Hello {userName}.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
}