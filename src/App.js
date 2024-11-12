import {Routes, Route, Navigate} from 'react-router-dom';

import './App.scss';

import Navbar from './views/navbar/Navbar.view';
import LandingPage from './views/landingPage/landingPage.view';
import ExplorePage from './views/explorePage/explorePage.view';
import AddRecipePage from './views/addRecipePage/addRecipePage.view';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/addRecipe" element={<AddRecipePage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      
    </Routes>

  );
}

export default App;
