
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Info from './pages/Info';

import Navbar, { Navbar2 } from './Component/Navbar';

function AppContent() {
  const location = useLocation();

  const pagesWithNavbar2 = ['/', '/login'];

  return (
    <>
      {pagesWithNavbar2.includes(location.pathname)
        ? <Navbar2 />
        : <Navbar />
      }

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;