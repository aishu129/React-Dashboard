import React from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <Nav>
      <div className="navbar">
        <div className="search">
          <div className='searchicon'>         
          <BiSearch />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="account">
            <div class="accname">Hi there, Aishwarya</div>
        </div>
        <div className="topbtns">
          <button>Add</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
      
      
      
    </Nav>
  )
}

const Nav = styled.nav`

  background: black;
  position: relative;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;


.navbar {
  background: #2d3030;
  border-bottom: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  transition: all 0.5s ease;
}


.navbar .sidebar-button {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
}

.navbar .sidebar-button span {
  font-size: 35px;
  margin-right: 10px;
}

.navbar .search {
  position: relative;
  margin-top: 20px;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 20px 20px;
}

.topbtns button {
  background: none;
  color: gray;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid gray;
  margin: 0 5px;
  cursor: pointer;
}

.topbtns button:hover {
  color: black;
  background: white;
}

.navbar .search input {
  color: black;
  font-size: 18px;
  height: 80%;
  width: 100%;
  outline: none;
  background: gray;
  border: none;
  border-radius: 30px;
  padding: 0 15px;
}

.navbar .search .searchicon {
  color: gray;
  position: absolute;
  height: 40px;
  width: 50px;
  left: -35px;
  border-radius: 4px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.4 ease;
}



.main .navbar .account .bxs-bell-ring {
  margin-right: 20px;
  height: 50px;
  width: 50px;
}

.main .navbar .account {
  color: gray;
  display: flex;
  align-items: center;
  background: none;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
}

.navbar .account img {
  height: 50px;
  width: 50px;
  margin-left: 20px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.navbar .account .accname {
  color: gray;
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
}
@media only screen and (max-width: 600px) {
  

}

  
`;

export default Navbar