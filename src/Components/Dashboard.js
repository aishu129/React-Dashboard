import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar"
import Projects from "./Projects"
import Right from "./Right"
const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className='grid'>
        <div className='main'>
          <Projects />
        </div>
        <div className='right'>
          <Right />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
margin-left: 16vw;
  .grid {
    display: flex;
  }
  .main {
    margin-top: -90vh;
  }
  .right {
    position: relative;
    top: -320px;
  }
  
`;


export default Dashboard