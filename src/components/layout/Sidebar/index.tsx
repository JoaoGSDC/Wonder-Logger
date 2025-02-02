import { useContext, useEffect } from 'react'

import { SidebarContext } from '@contexts/SidebarContext'

import { Container } from './styles'

import Profile from '@assets/no-avatar.jpg'
import { AuthContext } from '@contexts/AuthContext'
import Router from 'next/router'

const Sidebar: React.FC = () => {
  const { user, signOut } = useContext(AuthContext)
  const { isExpanded } = useContext(SidebarContext)

  return (
    <Container expanded={isExpanded}>
      <div className="logo-details">
        <i className="bx bxl-javascript"></i>
        <span className="logo_name">Wonder Logger</span>
      </div>
      <ul className="nav-links">
        <li>
          <a onClick={() => Router.push('/')}>
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </li>
        {/* <li>
          <div className="iocn-link">
            <a onClick={() => Router.push('/manual')}>
              <i className="bx bx-collection"></i>
              <span className="link_name">Dados</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a
                onClick={() => Router.push('/manual')}
                className="link_name"
                href="#"
              >
                Dados Manuais
              </a>
            </li>
            <li>
              <a
                onClick={() => Router.push('/lista/')}
                className="link_name"
                href="#"
              >
                Lista Software
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <div className="iocn-link">
            <a onClick={() => Router.push('/teste')}>
              <i className="bx bx-collection"></i>
              <span className="link_name">Category</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Category
              </a>
            </li>
            <li>
              <a href="#">HTML & CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
            <li>
              <a href="#">PHP & MySQL</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="link_name">Posts</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Posts
              </a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Login Form</a>
            </li>
            <li>
              <a href="#">Card Design</a>
            </li>
          </ul>
        </li> */}
        {/* 
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Analytics</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Analytics
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-line-chart"></i>
            <span className="link_name">Chart</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Chart
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-plug"></i>
              <span className="link_name">Plugins</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Plugins
              </a>
            </li>
            <li>
              <a href="#">UI Face</a>
            </li>
            <li>
              <a href="#">Pigments</a>
            </li>
            <li>
              <a href="#">Box Icons</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-compass"></i>
            <span className="link_name">Explore</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Explore
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-history"></i>
            <span className="link_name">History</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                History
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="link_name">Setting</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Setting
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src={Profile} alt="profileImg" />
            </div>
            <div className="name-job">
              <div className="profile_name">{user?.name}</div>
              <div className="job">{user?.job}</div>
            </div>
            <i onClick={() => signOut()} className="bx bx-log-out"></i>
          </div>
        </li> */}
      </ul>
    </Container>
  )
}

export default Sidebar
