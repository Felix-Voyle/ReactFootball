import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Nav/CustomNavBar';
import Home from './Home/Home';
import About from './About/About';
import Profile from './Profile/Profile';
import { AuthProvider } from './AuthContext';

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AuthProvider>
      <Router>
        <>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      </Router>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;

