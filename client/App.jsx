import React from 'react';
import HeaderContainer from './containers/header.jsx';
import FooterContainer from './containers/footer.jsx';
import MainContainer from './containers/mainContainer.jsx';

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
