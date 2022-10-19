import React from 'react'
import styled from 'styled-components'

const Analytics = () => {
  return (
    <Section>
    <div className="content" >
        <div className="project-cards">

          <div className="card">
              <div className="cardtitle">Super Cool Project</div>
              <div className="card-content">
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore mana
                  aliqua.
                </div>
                  <div className="icons" >
                     
                  </div>
               
            </div>
          </div>

          <div className="card">
            <div className="cardtitle">Less Cool Project</div>
            <div className="card-content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore mana
                aliqua.
              </div>
              <div className="icons" >
                 
                </div>
             
            </div>
          </div>

          <div className="card">
              <div className="cardtitle">Impossible App</div>
              <div className="card-content">
                <div className="text"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore mana
                  aliqua.</div>
                  <div class="icons" >
                    
                    </div>
            </div>
          </div>

          <div className="card">
            <div className="cardtitle">Easy Peasy App</div>
            <div className="card-content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore mana
                aliqua.
              </div>
              <div className="icons" >
                 
                </div>
            </div>
          </div>

          <div className="card">
            <div className="cardtitle">Ad Blocker</div>
            <div className="card-content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore mana
                aliqua.
              </div>
              <div class="icons" >
               
                </div>
            
            </div>
          </div>



        <div className="card">
          <div className="cardtitle">Money Making App</div>
          <div className="card-content">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore mana
              aliqua.
            </div>
            <div className="icons" >
              </div>
          
          </div>
        </div>
      </div>
      </div>
      </Section>

        
  )
}

const Section = styled.section`
.content {
  position: relative;
  display: flex;
  min-width: 400px;
  height: fit-content;
  flex-wrap: wrap;
  width: 800px;
}

.content .project-cards {
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 880px;
  padding: 0 20px;
  margin-bottom: 26px;
  margin-top: 40px;
}

.project-cards .card {
  background: #2d3030;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  min-width: 350px;
  height: 180px;
  box-sizing: border-box;
  border-left: 10px solid #5c3f90;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
}

.project-cards .cardtitle {
  font-size: 16px;
  font-weight: 500;
}

.icons {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
}


.content .card .card-content .text {
  font-size: 12px;
}

@media only screen and (max-width: 600px) {
  

}

`;

export default Analytics
