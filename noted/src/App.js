import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Lists from './pages/Lists';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Welcome to Noted</h1>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Lists />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
