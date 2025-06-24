import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
//import SchoolIcon from '@mui/icons-material/School';

import ExperienceItem from '../Components/ExperienceItem'; 

function Experience() {
  const briefcase = <BusinessCenterIcon />;
 // const school = <SchoolIcon />;

  return (
    <ExperienceStyled>
      <Title title={'EXPERIENCE'} span={'experience'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Work Experience'} />
        </div>
        <div className="experience-content">
          <ExperienceItem
            year={'2024-till date'}
            title={'Barista'}
            subTitle={'Ferry Cafe in CBD'}
            text={'Delivered high-quality espresso beverages and maintained exceptional customer service in a fast-paced CBD café environment. '}
          />
          <ExperienceItem
            year={'Mar 2023-July 2023'}
            title={'Customer Care executive'}
            subTitle={'Grassroots IT Solutions, Bangalore'}
            text={'Provided exceptional customer support by resolving inquiries and complaints promptly, ensuring high customer satisfaction and retention.'}
          />
          <ExperienceItem
            year={'Mar 2022-July 2022'}
            title={'Full Stack developer '}
            subTitle={'Zybisys Technology Solutions, Bangalore'}
            text={'Implement interactive and responsive user interfaces using React.JS.Build and maintain server-side logic, APIs, and database interactions using Node.js. '}
          />
        </div>
    

       
      </InnerLayout>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .u-small-title-margin {
    margin-top: 4rem;
  }

  .experience-content {
    border-left: 2px solid var(--border-color);
    padding-left: 2rem;
  }
`;

export default Experience;
