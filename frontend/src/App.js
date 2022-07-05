// import React, { useEffect } from 'react';
import {
  Route,
  //Redirect,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import About from './pages/About.js';
import Blog from './pages/Blog/Blog.js';
import Works from './pages/Works/Works.js';
import Login from './pages/Login.js';
import Error from './pages/Error.js';
// import Auth from './pages/login/Auth';

import MainNavigation from './shared/components/Navigation/MainNavigation';

// import { AuthContext } from './shared/context/auth-context';
// import { useAuth } from './shared/hooks/auth-hook';

import './App.css';
import Title from './pages/Title.js';

function App() {
  // const { token, login, logout, userId } = useAuth();
  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );

  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: !!token,
    //     token: token,
    //     userId: userId,
    //     login: login,
    //     logout: logout,
    //   }}
    // >
    <div className="website">
      <Router>
        <Title />
        <MainNavigation />
        <main>{routes}</main>
        {/* <Redirect to="/" /> */}
      </Router>
    </div>
    //</AuthContext.Provider>
  );
}

export default App;
