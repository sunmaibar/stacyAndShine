import React, { useContext } from "react"
import styled from "styled-components"
// import logo from "../images/logo.svg"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>從心坊間</h3>
          </Link>
          <Link to="https://www.facebook.com/%E6%84%9B%E5%88%86%E4%BA%AB-%E5%85%B1%E7%94%A8%E7%A9%BA%E9%96%93-119327963243791">
            <button>FB粉絲頁</button>
          </Link>
          {/* <button className="toggle-btn">
            <GoThreeBars />
          </button> */}
        </div>
        <ul className="nav-links">
          <li></li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }
    h3 {
      color: white;
    }
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }

    /* .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    } */
  }

  .nav-links {
    /* display: none; */
  }
  /* @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
  } */
`

export default Navbar
