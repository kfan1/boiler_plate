import React from 'react';
import HeaderContainer from './containers/header.jsx';
import FooterContainer from './containers/footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/mainPage.jsx';
import SignUp from './pages/signUpPage.jsx';
import LogIn from './pages/logInPage.jsx';
import About from './pages/aboutPage.jsx';
import './stylesheets/styles.scss'

function App() {
  return (
    <div>
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
