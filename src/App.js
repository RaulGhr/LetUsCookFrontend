import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';

import Navbar from './views/navbar/Navbar.view';
import LandingPage from './views/landingPage/landingPage.view';
import ExplorePage from './views/explorePage/explorePage.view';
import AddRecipePage from './views/addRecipePage/addRecipePage.view';
import Register from './views/authentification/Register.view';
import Login from './views/authentification/Login.view';
import ViewRecipePage from "./views/viewRecipePage/viewRecipePage.view";

import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addRecipe" element={<AddRecipePage />} />
          <Route path="/explore/:id" element={<ViewRecipePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
