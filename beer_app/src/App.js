import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Beer from './components/pages/Beer';
import Error from './components/pages/Error';

import BeerState from './context/beer/BeerState';

import './App.css';

function App() {
  return (
    <BeerState>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} exact />
            <Route path='/Home' element={<Home />} exact />
            <Route path='/beer/:id' element={<Beer />} exact />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
    </BeerState>
  );
}

export default App;
