import React, { useState } from 'react';
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
import BlogPost from './pages/Blog/Blog_Post.js';

const blogs = [];

function App() {
  const [blogID, setBlogID] = useState(null);
  // const { token, login, logout, userId } = useAuth();

  const getBlogID = () => {
    setBlogID(blogs.id);
  }

  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Blog />} onClick={getBlogID} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path={`/:blogID`} element={<BlogPost />} />
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
