import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Token from './pages/tokenPage';

function App() {
  return (
    <div className='container'>
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/tokenPage' element={<Token/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
