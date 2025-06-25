import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';

// Update these imports to MUI v5
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

import ResumeItem from '../Components/ResumeItem';
// import { Button } from 'react-bootstrap';
 //import GetAppIcon from '@mui/icons-material/GetApp';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <ResumeStyled>
      <Title title={'EDUCATION'} span={'resume'} />
       {/*<a className='btn btn-primary' rel="noreferrer" href='https://drive.google.com/file/d/1UPGYRKfsVo8SdvUHBDxlsQNCAQ2Iwrzz/view?usp=sharing' target='_blank'>Download <GetAppIcon/></a> */} 
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Education'} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'2023-2024'}
            title={'MAT (Master of Applied Technologies (Computing))'}
            subTitle={'Unitec Institute of Technology,Auckland, New Zealand'}
            text={'Grade: B'}
          />
            <ResumeItem
            year={'2015-2018'}
            title={'BCA (Bachelor of Computer Application)'}
            subTitle={'KLE societys S. Nijalingappa College, Bangalore'}
            text={'76%'}
          />

          <ResumeItem
            year={'2013-2015'}
            title={'2nd PUC'}
            subTitle={'GT Independent PU College, Bangalore'}
            text={'79%'}
          />

          <ResumeItem
            year={'2012-2013'}
            title={'SSLC'}
            subTitle={'Shushruti Vidya Samste, School, Peenya 2nd Stage, Bangalore'}
            text={'72%'}
          />
        </div>

        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={'Certifications'} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'2021-2022'}
            title={'FSD (Full Stack Developer)'}
            subTitle={'GUVI, IIT Madras Research Park, Kanagam Road, Taramani, Chennai, Tamil Nadu'}
            text={''}
          />

          <ResumeItem
            year={'2017-2018'}
            title={'SQL Server Administrator'}
            subTitle={'KDSSG Institute Marathahalli, Bangalore'}
            text={''}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
