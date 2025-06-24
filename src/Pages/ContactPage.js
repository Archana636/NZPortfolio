import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../Components/ContactItem';


function ContactPage() {
  const phone = <PhoneIcon/>
  const email = <EmailIcon/>
  const location = <LocationOnIcon />

    return (
        <MainLayout>
          <Title title={'Contact'} span={'Contact'}/>
          <ContactPageStyled>
          <InnerLayout className={'contact-section'}>

         <div className="right-content">
           <ContactItem title={'Phone'} icon={phone} contact1={'0226753647'} />
           <ContactItem title={'Email'} icon={email} contact1={'archu.it11@gmail.com'} />
           <ContactItem title={'Address'} icon={location} contact1={'101 Duke Street, Mount Roskill, Auckland '}/>
            </div>
         
         
        </InnerLayout>
          </ContactPageStyled>
        </MainLayout>
    )
}

 const ContactPageStyled = styled.section`
#contact{
    /* background-color:#0c0c0c; */
    width: 100%;
    height:calc(10vh - 48px)50vh 72px;
    box-sizing: border-box;
    padding : 15px 5rem;
    padding-top: 2.5rem;
    color: white;
    size:50px;
    position: relative;
    overflow: hidden;
}
.email{
  color:white;
  size:100px;
}

.contact-section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem ;
    @media screen and (max-width: 978px ){
    grid-template-columns: repeat(1, 1fr);
  
}
    .right-content{
      display: grid;
      flex-direction: column;
     overflow: hidden;
    grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width: 502px){
   width: 75%;
}
      }
    .contact-title{
      color: var(--white-color);
      padding: 2rem 0;
      font-size: 1.8rem;
      overflow: hidden;
    }
    .form{
      width: 100%;
      @media screen and (max-width: 502px){
   width: 70%;
}

      .form-field{
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label{
      position: absolute;
      left: 20px;
      top:-19px;
      display: inline-block;
      background-color: var(--background-dark-color);
      padding:0 .5rem;
      color: inherit;
        }
        input{
          border:1px solid var(--border-color);
          /* outline:  #1e3247 solid 1px; */
           /* background: transparent; */
           outline: none;
           background: transparent;
           opacity:4 ;
           height:50px;
           padding: 0 15px;
            width: 100%;
            color: inherit;
          }
          textarea{
             background-color: transparent;
             border:1px solid var(--border-color);
             outline: none;
             color: inherit;
             width: 100%;
             padding: .8rem 1rem;
          }
     } 
    
          }
      }
    



`;
export default ContactPage
