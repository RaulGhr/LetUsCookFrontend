import {Routes, Route, Navigate} from 'react-router-dom';

import './App.scss';

const dummyElemet = () => {}

function App() {
  return (
    <Routes>
      <Route path="/" element={<dummyElemet/>}/>
    </Routes>

  );
}

export default App;
