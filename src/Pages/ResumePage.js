import React from 'react'
import { MainLayout } from '../styles/Layouts';
import Resume from '../Components/Resume';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import { InnerLayout} from '../styles/Layouts';
// import { Button } from 'react-bootstrap';
import styled from 'styled-components';

function ResumePage() {
    return (
        <ResumeStyled>
             <MainLayout>
             
             <Resume/>
             {/* <div className="button">
             <a className='btn btn-primary' rel="noreferrer" href='https://drive.google.com/file/d/1P-S6k-XyGb7Isdvyd--yyH3uC0s545y2/view?usp=sharing' target='_blank'>Download <GetAppIcon/></a>
             </div> */}
             </MainLayout>
        </ResumeStyled>

    )
}
const ResumeStyled = styled.section`
.button{
    color:red;
    /* border-left: 2px;
    margin-bottom: .6rem; */
}

`

export default ResumePage; 

