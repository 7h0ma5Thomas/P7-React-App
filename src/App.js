import '@/App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoute from '@/pages/AllRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoute />
      </BrowserRouter>   
    </div>
  );
}

export default App;
