import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import ExperiencePage from './Pages/ExperiencePage';


import { Routes, Route } from 'react-router-dom'; // ✅ updated
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [theme] = useState('dark-theme');
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            {/* Optional: Brightness Toggle */}
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolios" element={<PortfolioPage />} />
         <Route path="/contact" element={<ContactPage />} /> 
         <Route path="/Experience" element={< ExperiencePage/>} /> 
        
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px){
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1, .line-2, .line-3, .line-4 {
     // width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
