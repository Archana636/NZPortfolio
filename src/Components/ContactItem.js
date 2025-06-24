import React from 'react'

import styled from 'styled-components';


function ContactItem({icon,title,contact1, contact2}) {
    return (
        < ContactItemStyled>
         <div className="left-content">
        {
         icon
        }
        </div> 
        <div className="right-content">
          <h6>{title}</h6>
          <p>{contact1}</p>
          <p>{contact2}</p>
            </div>  
        </ ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-color);
  display: flex;
  align-items: center;
  margin-top:1px;
  overflow: hidden;
 /* &:not(:last-child){
    margin-bottom:4rem ;
   
 } */

  .left-content{
    padding: 1.5rem;   
 border: 1px solid var(--border-color);
   font-size: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 1.5rem;
   /* overflow: hidden; */
       height: 60%;
   svg{
       font-size: 2rem;
       overflow: hidden;
   }
  }
  .left-content ,icon{
    height: 10px;

  }
  .right-content{
      h6{
          color: var(--white-color);
          font-size: 1.2rem;
          padding-bottom: .7rem;
          line-height: 70%;
      }
      p{
         padding : .2rem 0;
         overflow: hidden;
         line-height: 120%;
      }
  }
`;
export default ContactItem;
