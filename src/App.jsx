import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainPage from './pages/MainPage.jsx';
import Hello from './pages/HelloPage.jsx';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/hello' element={<Hello />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
