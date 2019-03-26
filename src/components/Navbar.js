import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../img/retirerite-logo-hort.svg'

const StyledHeader = styled.nav`
  .navbar-brand {
    padding: 2em 0;
    transition: 300ms;
  }

  .navbar-brand img {
    width: 250px;
    transition: 300ms;
  }

  .retirerite-nav-bottom {
    background-color: ${props => props.theme.darkBlue};
  }

  .retirerite-nav-bottom a {
    color: #ffffff;
    font-weight: 700;
  }

  .retirerite-nav-bottom a.navbar-item:hover {
    color: #ffffff;
    background-color: ${props => props.theme.red};
  }

  .retirerite-navbar-start {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .retirerite-navbar-menu .navbar-menu {
    display: block;
  }

  .retirerite-navbar-burger.navbar-burger {
    color: #ffffff;
  }

  .retirerite-nav-social svg {
    height: 20px;
  }

  @media (max-width: 768px) {
    &.scrolled {
      position: fixed;
      width: 100%;
      top: 0;
      background-color: #ffffff;
      z-index: 1;

      .navbar-brand {
        padding: 1em 5%;
        img {
          width: 150px;
        }
      }
    }
  }

  @media(max-width: 1087px) {
    .retirerite-navbar-start {
      flex-direction: column;
    }

    .retirerite-nav-bottom .navbar-item {
      color: #000;
      width: 100%;
    }

    .navbar-brand {
      padding: 2em 5%;
    }

    .retirerite-nav-bottom .navbar-item:hover {
      color: #ffffff;
      background-color: ${props => props.theme.red};
    }

    .retirerite-nav-social {
      justify-content: center;
      text-align: center;
      ul {
        width: 200px;
        max-width: 90%;
        li {
          margin: 0 10%;
          svg {
            path {
              fill: #000000;
            }
          }
        }
      }
    }

    .retirerite-nav-bottom .navbar-item:hover svg path {
      fill: #ffffff;
    }
  }

  @media(min-width: 1088px) {

    .retirerite-nav-bottom a {
      min-height: 60px;
      height: 100%;
    }

    .navbar-item {
      padding-left: 2%;
      padding-right: 2%;
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
    // Call scrolling behaviour function
    this.navScrollBehavior();

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

  navScrollBehavior() {
    const navBar = document.querySelector('.retirerite-main-nav');

    window.addEventListener('scroll', () => {
      let scrollFromTop = window.scrollY;
      if(scrollFromTop >= 200) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    })
  }

  render() {
    return (
  
    <StyledHeader className="is-transparent retirerite-main-nav" role="navigation" aria-label="main-navigation">
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
                The Team
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
