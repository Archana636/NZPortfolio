 import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

import Particle from '../Components/Particle';

import GetAppIcon from '@mui/icons-material/GetApp';

// import { Button } from 'react-bootstrap';



function HomePage() {    
    return (
        <HomePageStyled>
            <div className="particle-con">
              <Particle />
            </div>
            <div className="typography">
       <h1>Hi, <span>I'am Archana Krishnan</span></h1>
        <p>Goal oriented full stack developer, Passion for working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. I primarily work with MERN stack among the full stack technologies.
        </p>

{/* <div> */}
{/* <a href="https://github.com/Archana636" target="_blank" className="far fa-circle" rel="noreferrer">
                <GithubIcon/>
            </a> */}
<div className="row">         
  <a className='btn btn-primary block' rel="noreferrer" href='https://github.com/Archana636' target='_blank'>
    GitHub <GitHubIcon />
  </a>
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
  <a className='btn btn-primary block' rel="noreferrer" href='https://drive.google.com/file/d/1sEoks_1QRSexHgeEJb9GnIkQ7tqLKaXT/view?usp=sharing' target='_blank'>
    Resume <GetAppIcon />
  </a>        
</div> 
{/* </div> */}

        {/* <div className="icons">
        <a href="https://github.com/Archana636" target="_blank" className="far fa-circle" rel="noreferrer">
                <GithubIcon/>
            </a>
            <a className='btn btn-primary' rel="noreferrer" href='https://drive.google.com/file/d/1DcYUH66Wb7ZJRq5yrZsn93dSr-NYT57I/view?usp=sharing' target='_blank'>Resume<GetAppIcon/></a>
            </div> */}


            {/* <a href="https://twitter.com/Archana01179986?s=08" target="_blank" className=" icon i-facebook"  rel="noreferrer">
                <TwitterIcon/>
            </a> */}
                       
            {/* <a href="https://www.linkedin.com/in/archana-k-68a532209" target="_blank" className="far fa-circle"  rel="noreferrer">
                <LinkedinIcon/>
            </a> */}

            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
 width: 100%;
 //color: red;
 height: 100vh;
   position: relative;
/* word-spacing: 30px; */

@media screen and (max-width: 1200px){
  h1{
      font-size: 10px;
     
  }
}
 .p-particle-con{
     position: absolute;
      top: 0;
     left: 0;

 }

 .typography{
     position: absolute;
     top:50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     width: 80%;
    span{
        font-size: 2.5rem;
    }
    a {
        flex:20;
        justify-Content:inherit; 
        padding:8px;
        /* flex-Wrap: wrap; */
        word-spacing: 30px;
    }
     .icons{
        display: flex;
         justify-content:center;
         margin-top:1rem ;
         margin-bottom:8rem;

         
         .icon{
border: 2px solid var(--border-color);
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
transition:  all .4s ease-in-out;
cursor: pointer;

&:hover{
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}
&:not(:last-child){
    margin-right:1rem ;
    
}
svg{
   margin: .2rem;

   }
}
.i-linkedin{
    &:hover{
        border: 1px solid #0077b5 ;
    color: #0077b5 ;
} 
}
.i-github{
    &:hover{
        border: 2px solid #fafafa ;
    color: #fafafa ;
} 
}
.i-facebook{
    &:hover{
        border: 2px solid #4267B2 ;
    color: #4267B2 ;
} 
}
}
}
 .row {
  width: 25%;
  margin: 0 auto;
}
/*.block {
  width: 50px;
  float: left;
 
} */
/* .block1 {
  width: 50px;
  float: left;
  padding-left: 10px;
} */
`;

export default HomePage;


