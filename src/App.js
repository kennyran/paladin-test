import './App.css';

// Component imports
import Header from './components/header'
import NavButtons from './components/nav-btns';
import Pool from './components/pool'

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <NavButtons />
        <Pool />
      </div>
    </div>
  );
}

export default App;
