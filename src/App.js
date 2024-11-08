import {Routes, Route, Navigate} from 'react-router-dom';

import './App.scss';

import Navbar from './views/navbar/Navbar.view';
import LandingPage from './views/landingPage/landingPage.view';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      
    </Routes>

  );
}

export default App;
