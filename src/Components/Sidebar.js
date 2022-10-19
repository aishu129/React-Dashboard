import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { MdModeComment } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <a href="#">
                  <AiFillHome />
                  <span>Home</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <a href="#">
                  <RiProfileLine />
                  <span>Profile</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <a href="#">
                  <MdModeComment />
                  <span>Messages</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <a href="#">
                  <AiFillClockCircle />
                  <span>History</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <a href="#">
                  <AiFillFile />
                  <span>Tasks</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : ""}
              >
                <a href="#">
                  <TiGroup />
                  <span>Communities</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(7)}
                className={currentLink === 7 ? "active" : ""}
              >
                <a href="#">
                  <IoSettings />
                  <span>Settings</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(8)}
                className={currentLink === 8 ? "active" : ""}
              >
                <a href="#">
                  <BsFillQuestionSquareFill />
                  <span>Support</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(9)}
                className={currentLink === 9 ? "active" : ""}
              >
                <a href="#">
                  <SiAdguard />
                  <span>Privacy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #2d3030;
  height: 100vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: gray;
        font-size: 2rem;
      }
      span {
        font-size: 1.5rem;
        color: gray;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

          li:hover {
            background-color: white;
            a {
              color: gray;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: gray;
          }
        }
        .active {
          background-color: white;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
  }
    .logout:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: gray;
    }
  }

  @media only screen and (max-width: 600px) {
  

  }
`;
export default Sidebar;
