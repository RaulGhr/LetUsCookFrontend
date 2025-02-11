import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./views/navbar/Navbar.view";
import LandingPage from "./views/landingPage/landingPage.view";
import ExplorePage from "./views/explorePage/explorePage.view";
import AddRecipePage from "./views/addRecipePage/addRecipePage.view";
import Register from "./views/authentification/Register.view";
import Login from "./views/authentification/Login.view";
import ViewRecipePage from "./views/viewRecipePage/viewRecipePage.view";

import { AuthProvider } from "./contexts/authContext";
import ProfilePage from "./views/myProfilePage/myProfilePage.view";
import OthersProfilePage from "./views/othersProfilePage/othersProfilePage.view";
import ShoppingList from "./views/ShoppingList/ShoppingList";
import FeedPage from "./views/feedPage/feedPage.view";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addRecipe" element={<AddRecipePage />} />
          <Route path="/explore/:id" element={<ViewRecipePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/users/:username" element={<OthersProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
