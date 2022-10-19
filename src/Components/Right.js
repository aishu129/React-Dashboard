import React from 'react'
import styled from 'styled-components'

const Announcements = () => {
  return (
    <Section>
    <div className="right">
    <div className="right-section">
            <div className="title">Announcements</div>
            <div className="announcement">
              <p>
                <a href="#">
                  <span className="ann-title">Site Maintenance</span>
                </a>
                <div className="subtext">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</div>
              </p>
            </div>
            <div className="announcement">
              <p>
                <a href="#">
                  <span className="ann-title">Community Share Day</span>
                </a>
                <div class="subtext">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</div>
              </p>
            </div>
            <div className="announcement">
              <p>
                <a href="#">
                  <span className="ann-title">Updated Privacy Policy</span>
                </a>
                <div className="subtext">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</div>
              </p>
            </div>
          </div>
          <div className="right-section">
            <div className="title">People</div>
              <div className="person">
                <div className="name">@Carlo</div>
              </div>
              <div className="person">
                <div className="name">@Jenny</div>
              </div>
              <div className="person">
                <div className="name">@Jaswanth</div>
              </div>
          </div>
          </div>
          </Section>
  )
}

const Section = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100,200,300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}




 .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;
    padding: 0 20px;
    width: 25%;
}

.right .announcement {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
}





 .right .right-section {
    background: #2d3035;
    margin: 0 2px 5px 0;
    border-radius: 12px;
    padding: 1rem;
}


.right-section p a {
    text-decoration: none;
    color: gray;
}

.right .right-section .announcement, .subtext {
    font-size: 12px;
    font-weight: 400;
    color: grey;
    text-decoration: none;
}

.right .right-section .title {
    font-size: 20px;
    color: gray;
    font-weight: 400;
    text-align: center;
    
}

.person {
    margin: 2px 0;
    display: flex;
    width: 350px;
    height: 80px;
}

.name {
    font-size: 18px;
    font-weight: 600;
    color: gray;
    padding-left: 30px;
    padding-top: 5px;
}

.photo {
    width: 100%;
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

.announcement {
    display: flex;
    flex-direction: column;
    margin-top: -25px;
    width: 350px;
    height: 100px;
    margin-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  

}

`;

export default Announcements