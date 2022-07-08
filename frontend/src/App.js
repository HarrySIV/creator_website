import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import About from './pages/About.js';
import Blog from './pages/Blog/Blog.js';
import Works from './pages/Works/Works.js';
import Login from './pages/Login.js';
import Error from './pages/Error.js';

import MainNavigation from './shared/components/Navigation/MainNavigation';


import './App.css';
import Title from './pages/Title.js';
import BlogPost from './pages/Blog/Blog_Post.js';

function App() {

  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path={`/:blogID`} element={<BlogPost />} />
    </Routes>
  );

  return (
    <div className="website">
      <Router>
        <Title />
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </div>
  );
}

export default App;
