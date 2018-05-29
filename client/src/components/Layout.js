import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/css/style.css'

export const Layout = props => {
  return (
    <div className="app-container">
      <header>
        <Link to="/">
          <img className="logo" src="/styles/images/bjjheros-logo.png" alt="BJJ Heroes logo" />
        </Link>
      </header>
      <div className="app-content">{props.children}</div>
      <footer>
        <p>
          This is a demo app to showcase <strong>universal Javascript</strong>
          with <strong> React</strong> and <strong> React-router</strong>.
        </p>
      </footer>
    </div>
  );
}

export default Layout;