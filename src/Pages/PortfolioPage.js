import React from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import './portfolio.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
// import * as SiIcons from "react-icons/si";

function Portfolio() {
  return (
    <MainLayout>
      <Title title={'portfolios'} span={'portfolios'} />
      <InnerLayout>
        <div className="allProjects">
         {/*  <div className="card" data-aos="zoom-in-up">     
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbaZxBr74nAr46kChNndBVjp5bbTjNTfU4Ag&usqp=CAU"
              className="card-img-top"
              alt="Amazon app"
            />  
            <div className="title_heading">
              <h5 className="card-title">Amazon</h5>
            </div>
            <div className="card-img-overlay">
              <div className="img-title">Amazonapp</div>
              <div className="img-description">
                <p>
                  Amazon is the big online we know today. You can specialize your "store",
                  shop by various departments, read reviews, leave reviews, comment on
                  reviews, rate items and distributors, and find the best deals available
                </p>
                <div className="tech_used">
                  <i className="fab fa-react react"></i> &nbsp;
                  <i className="fab fa-node node"></i> &nbsp;
                   {/*iIcons.SiMongodb className='mongodb' /> &nbsp; */}
                  {/* <p className="codeLinks text-center pt-3">
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/Amazon-Frontend"
                    >
                      Client <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/Amazon-Backend"
                    >
                      Server <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="http://archu-amazon-clone.herokuapp.com/"
                    >
                      Demo <LinkIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */} 

          <div className="card" data-aos="zoom-in-up">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNl7adfkkGz13l25x4P6mlHXpqFFKFLnVCaw&usqp=CAU"
              className="card-img-top"
              alt="Pizza Delivery"
            />
            <div className="title_heading">
              <h5 className="card-title">Pizza Delivery</h5>
            </div>
            <div className="card-img-overlay">
              <div className="img-title">Pizza Delivery</div>
              <div className="img-description">
                <p>
                  Pizza Delivery Driver starts at the pizza restaurant or chain where you
                  work. Customers call or email in an order, including the address where
                  they want it delivered. After the food is prepared, you grab the address
                  and pizza.
                </p>
                <div className="tech_used">
                  <i className="fab fa-react react"></i> &nbsp;
                  <i className="fab fa-node node"></i> &nbsp;
                  <p className="codeLinks text-center pt-3">
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/pizza_frontend"
                    >
                      Client <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/pizzaapp_backend"
                    >
                      Server <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vast-castle-62530.herokuapp.com/"
                    >
                      Demo <LinkIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card" data-aos="zoom-in-up">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj5lvL_aWUgnop-S_OD7UIINsEQ9zIWjTpw&usqp=CAU"
              className="card-img-top"
              alt="Gmail Clone"
            />
            <div className="title_heading">
              <h5 className="card-title">Gmail Clone</h5>
            </div>
            <div className="card-img-overlay">
              <div className="img-title">Gmail Clone</div>
              <div className="img-description">
                <p>
                  Gmail is a free email service provided by Google. In many ways, Gmail
                  is like any other email service: You can send and receive emails, block
                  spam, create an address book, and perform other basic email tasks.
                </p>
                <div className="tech_used">
                  <i className="fab fa-react react"></i> &nbsp;
                  <i className="fab fa-node node"></i> &nbsp;
                  <p className="codeLinks text-center pt-3">
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/Gmail-Frontend"
                    >
                      Client <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/Gmail-Backend"
                    >
                      Server <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://archu-gmail.herokuapp.com/"
                    >
                      Demo <LinkIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="card" data-aos="zoom-in-up">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY1e-4AJYq-X6pOrUF3sqon9NJ4Zcd0mS-w&usqp=CAU"
              className="card-img-top"
              alt="UniChat"
            />
            <div className="title_heading">
              <h5 className="card-title">UniChat</h5>
            </div>
            <div className="card-img-overlay">
              <div className="img-title">UniChat</div>
              <div className="img-description">
                <p>
                  Unichat is a really cool graphical chatting program that allows you to
                  select online avatars and interact with other users on the Internet
                </p>
                <div className="tech_used">
                  <i className="fab fa-react react"></i> &nbsp;
                  <i className="fab fa-node node"></i> &nbsp;
                  <p className="codeLinks text-center pt-3">
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/UniChat"
                    >
                      Client <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/UniChat_Backend"
                    >
                      Server <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://archu-unichat.netlify.app/"
                    >
                      Demo <LinkIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Uncomment if you want to add Messaging App */}
          {/*
          <div className="card" data-aos="zoom-in-up">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYubaHI5LcqfJzG3niNBy6jQvBJ6U3K6jlFg&usqp=CAU"
              className="card-img-top"
              alt="Messaging Application"
            />
            <div className="title_heading">
              <h5 className="card-title">Messaging Application</h5>
            </div>
            <div className="card-img-overlay">
              <div className="img-title">Messaging Application</div>
              <div className="img-description">
                <p>
                  A chat app where people can send messages and files instantly.
                </p>
                <div className="tech_used">
                  <i className="fab fa-react react"></i> &nbsp;
                  <i className="fab fa-node node"></i> &nbsp;
                  <p className="codeLinks text-center pt-3">
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/ChatAppClient"
                    >
                      Client <GitHubIcon />
                    </a>{' '}
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Archana636/ChatAppServer"
                    >
                      Server <GitHubIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </InnerLayout>
    </MainLayout>
  );
}

export default Portfolio;
