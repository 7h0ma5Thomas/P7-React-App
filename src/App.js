import logo from '@/logo.svg';
import '@/App.css';
import Home from '@/pages/Home';
import Housing from '@/pages/Housing';
import About from '@/pages/About';
import Error from '@/pages/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Housing />
        <About />
        <Error />
      </header>
    </div>
  );
}

export default App;
