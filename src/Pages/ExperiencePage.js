import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Experience from '../Components/Experience';
import styled from 'styled-components';

function ExperiencePage() {
  return (
    <ExperienceStyled>
      <MainLayout>
        <Experience />
        {/* <div className="button">
        <a className='btn btn-primary' rel="noreferrer" href='https://drive.google.com/file/d/1P-S6k-XyGb7Isdvyd--yyH3uC0s545y2/view?usp=sharing' target='_blank'>Download <GetAppIcon/></a>
        </div> */}
      </MainLayout>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.section`
  .button {
    color: red;
    /* border-left: 2px;
    margin-bottom: .6rem; */
  }
`;

export default ExperiencePage;
