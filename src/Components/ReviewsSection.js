import React from 'react';
import styled from 'styled-components';
import { InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
// import ReviewItem from '../Components/ReviewItem';


function ReviewsSection() {
    return (
       
        <ReviewsStyled >
            <Title title={'Academic Projects'} span={'Academic Projects'}/>
            <InnerLayout>
           <div className="reviews">
               {/* <ReviewItem  */}
               
              {/* text={'Done BCA 5th  Sem Final Year Project: BANK MANAGEMENT SYSTEM  Font End: VB.NET 2017, BackEnd: SQL Server Management Studio 2017, Frameworks: Bunifu Frameworks, Material Skins and UI Design.         Description: The main aim of this project is to provide an effective way to bring all the operations of a Bank from the creation of new accounts to maintaining accounts and printing Check books to the user to get his work easily done, while safeguarding the confidential data of the customer and bank  '} */}
    {/* /> */}

                {/* <ReviewItem 
               text={'Done BCA 6th Sem Final Year Project: ONLINE AMUSEMENT PARKS  Font End: HTML5.0, CSS, JavaScript,Bootstrap, BackEnd: MySql Workbench, Server: Apache Tomcat 9.0, . This Project schedules has been created for developing an Amusement Park which will contain all kinds of entertainment for all kinds of people. The main motive is "Fun Unlimited" will attract not just local Visitor , but also cater to the foreign tourists or visitor too.'}
               /> */}
               <div className="text1">
              <h5>Topics : <b> BANK MANAGEMENT SYSTEM</b></h5>
              <h6>FrontEnd : VB.NET 2017 </h6>
              <h6>BackEnd : SQL Server Management Studio 2017. </h6>
              <h6>Frameworks : Bunifu Frameworks, Material Skins </h6>
              <h6>Description : The main aim of this project is to provide an</h6>
                   <h6>effective way to bring all the Operations of a Bank from</h6>
                   <h6>the creation of new accounts to maintaining accounts and</h6>
                   <h6>printing Check books to the user to get his work easily done.</h6>
         </div>
         <div className="text2">
 <h5>Topics : <b>ONLINE AMUSEMENT PARKS</b></h5>
 <h6>FrontEnd : HTML5.0, CSS, JavaScript, Bootstrap, JQuery </h6>
 <h6>BackEnd : MYDSQL Workbench. </h6>
 <h6>Server : Apache Tomcat</h6>
 <h6>Description : The main aim of this project is to provide an</h6>
 <h6>effective way to bring all the Operations of a Bank from</h6>
 <h6>the creation of new accounts to maintaining accounts and</h6>
 <h6>printing Check books to the user to get his work easily done.</h6>
</div>
             
              
               </div> 
            </InnerLayout>
        </ReviewsStyled >
        
    )
}

const ReviewsStyled = styled.section`
.reviews{
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 1.5rem;

@media screen and (max-width:650px){
    grid-template-columns: repeat(1, 1fr);
}
.text1 >h5> b{
  color: #19B5FE;
}
.text2 >h5> b{
  color: #19B5FE;
}

};
`

export default ReviewsSection;
