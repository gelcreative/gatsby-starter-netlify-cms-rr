import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../img/retirerite-logo-hort.svg'

const StyledHeader = styled.nav`
  .navbar-brand {
    padding: 2em 0;
  }

  .navbar-brand img {
    width: 250px;
  }

  .retirerite-nav-bottom {
    background-color: ${props => props.theme.darkBlue};
  }

  .retirerite-nav-bottom a {
    color: #ffffff;
    font-weight: 700;
  }

  .retirerite-nav-bottom a.navbar-item:hover {
    color: ${props => props.theme.red};
  }

  .retirerite-navbar-start {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .retirerite-navbar-menu .navbar-menu {
    display: block;
  }

  .retirerite-navbar-burger.navbar-burger {
    color: #ffffff;
  }

  @media(max-width: 1087px) {
    .retirerite-navbar-start {
        flex-direction: column;
    }

    .retirerite-nav-bottom a {
        color: #000;
    }

    .navbar-brand {
      padding: 2em 5%;
    }
  }

  @media(min-width: 1088px) {

    .retirerite-nav-bottom a {
      height: 60px;
    }

    .retirerite-navbar-start [aria-current] {
      position: relative;
    }

    .retirerite-navbar-start [aria-current]:after {
        content: '';
        width: 0; 
        height: 0; 
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 12px solid #ffffff;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
  }
`

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    return (
  
    <StyledHeader className="is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" title="Logo">
            <img src={logo} alt="RetireRite"/>
          </Link>
        </div>
      </div>
      <div className="retirerite-nav-bottom">
        <div className="container">
          <div id="navMenu" className="retirerite-navbar-menu navbar-menu">
            <div className="retirerite-navbar-start has-text-centered">
              <Link className="navbar-item" to="/about/">
                About
              </Link>
              <Link className="navbar-item" to="/services/">
                Services
              </Link>
              <Link className="navbar-item" to="/blog-page/">
                Blog
              </Link>
              <Link className="navbar-item" to="/faq/">
                FAQ
              </Link>
              <Link className="navbar-item" to="/tools-resources/">
                Tools &amp; Resources
              </Link>
              <Link className="navbar-item" to="/contact/">
                Contact
              </Link>
            </div>
          </div>
          {/* Hamburger menu */}
          <div className="retirerite-navbar-burger navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </StyledHeader>
  )}
}

export default Navbar
