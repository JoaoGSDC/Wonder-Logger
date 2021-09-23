import styled from 'styled-components'

import Logo from '@assets/logo.png'
import LogoMEG from '@assets/logo-meg-tv.png'

type SidebarContainerProps = {
  expanded: boolean
}

export const Container = styled.aside<SidebarContainerProps>`
  width: ${props => (props.expanded ? '260px' : '78px')};
  height: 100vh;
  // overflow-x: hidden;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  background: #3f3b52;
  z-index: 100;
  transition: all 0.5s ease;

  @media (max-width: 993px) {
    position: fixed;
    z-index: 3;
    right: ${props => (props.expanded ? '0' : '-100%')};
    transition: all 300ms ease-in-out;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;

    i {
      font-size: 30px;
      color: #fff;
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
    }

    .logo_name {
      font-size: 19px;
      color: #fff;
      font-weight: 600;
      transition: 0.3s ease;
      transition-delay: ${props => (props.expanded ? '0.1' : '0s')};
      opacity: ${props => (props.expanded ? '1' : '0')};
      pointer-events: ${props => (props.expanded ? 'all' : 'none')};
    }
  }

  .nav-links {
    height: 100%;
    padding: 30px 0 150px 0;
    overflow: ${props => (props.expanded ? 'auto' : 'visible')};

    li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
    }
    li:hover {
      background: #1d1b31;
    }

    li .iocn-link {
      display: ${props => (props.expanded ? 'flex' : 'block')};
      align-items: center;
      justify-content: space-between;
    }

    li i {
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .arrow{
      display: ${props => (props.expanded ? 'block' : 'none')};
    }

    li.showMenu i.arrow {
      transform: rotate(-180deg);
      
      display: ${props => (props.expanded ? 'block' : 'none')};
    }

    li a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    li a .link_name {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      transition: all 0.4s ease;
      opacity: ${props => (props.expanded ? '1' : '0')};
      pointer-events: ${props => (props.expanded ? 'all' : 'none')};
    }

    li .sub-menu {
      background: #1d1b31;
      position: ${props => (props.expanded ? 'relative' : 'absolute')};
      left: ${props => (props.expanded ? '0' : '100%')};
      top: ${props => (props.expanded ? '0' : '-10px')};
      margin-top: ${props => (props.expanded ? '-10px' : '0px')};
      padding: ${props => (props.expanded ? '6px 6px 14px 80px' : '10px 20px')};
      border-radius: 0 6px 6px 0;
      opacity: ${props => (props.expanded ? '1' : '0')};
      display: ${props => (props.expanded ? 'none' : 'block')};
      pointer-events: ${props => (props.expanded ? 'all' : 'none')};
      transition: 0s;
    }

    li.showMenu .sub-menu {
      display: block;
    }

    li .sub-menu a {
      color: #fff;
      font-size: 15px;
      padding: 5px 0;
      white-space: nowrap;
      opacity: 0.6;
      transition: all 0.3s ease;
    }

    li .sub-menu a:hover {
      opacity: 1;
    }

    li:hover .sub-menu {
      top: 0;
      opacity: 1;
      pointer-events: auto;
      transition: all 0.4s ease;
    }

    li .sub-menu .link_name {
      display: none;
    }

    li .sub-menu .link_name {
      font-size: 18px;
      opacity: 1;
      display: block;
      //close
    }

    li .sub-menu.blank {
      opacity: 1;
      pointer-events: auto;
      padding: 3px 20px 6px 16px;
      opacity: 0;
      pointer-events: none;
    }

    li:hover .sub-menu.blank {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  }

  .profile-details {
    position: fixed;
    bottom: 0;
    width: ${props => (props.expanded ? '240px' : '78px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => (props.expanded ? '#1d1b31' : 'none')};
    padding: 12px 0;
    transition: all 0.5s ease;
  }
  .profile-details .profile-content {
    display: flex;
    align-items: center;
  }

  .profile-details img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 14px 0 12px;
    background: #1d1b31;
    transition: all 0.5s ease;
    padding: ${props => (props.expanded ? '0' : '10px')};
  }

  .profile-details i {
    margin-left: -22px;
  }

  .profile-details .profile_name,
  .profile-details .job {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
  .profile-details i,
  .profile-details .profile_name,
  .profile-details .job {
    display: ${props => (props.expanded ? 'block' : 'none')};
  }

  .profile-details .job {
    font-size: 12px;
  }
  .home-section {
    position: relative;
    background: #e4e9f7;
    height: 100vh;
    left: 260px;
    width: calc(100% - 260px);
    transition: all 0.5s ease;
  }
  // .sidebar.close ~ .home-section {
  //   left: 78px;
  //   width: calc(100% - 78px);
  // }

  .home-section .home-content {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .home-section .home-content .bx-menu,
  .home-section .home-content .text {
    color: #3f3b52;
    font-size: 35px;
  }
  .home-section .home-content .bx-menu {
    margin: 0 15px;
    cursor: pointer;
  }
  .home-section .home-content .text {
    font-size: 26px;
    font-weight: 600;
  }
  @media (max-width: 420px) {
    // .sidebar.close .nav-links li .sub-menu {
    //   display: none;
    // }
  }
`
