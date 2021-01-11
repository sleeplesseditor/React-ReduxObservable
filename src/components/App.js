import logo from '../logo.svg';
import { connect } from 'react-redux';
import { ping } from '../actions';
import './App.css';

let App = ({ isPinging, ping }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Pinging?: {isPinging.toString()}</h1>
      <button onClick={ping}>Start to Ping</button>
    </div>
  );
}

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);

export default App;
