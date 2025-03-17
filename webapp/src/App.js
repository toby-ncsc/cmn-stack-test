import logo from './logo.svg';
import './App.css';
import PingButton from './PingButton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />


        <h1>CMN Test Application</h1>

        <img src={logo} className="App-logo" alt="logo" />
        
        <PingButton></PingButton>

      </header>



    </div>
  );
}

export default App;
