import { BrowserRouter } from 'react-router-dom';
import Router from '@/pages/Router';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter permet l'utilisation du routage
      dans l'ensemble de notre application */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>   
    </div>
  );
}

export default App;
