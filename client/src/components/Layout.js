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
          This is an app to showcase athletes who practice <strong>Brazilian Jiu Jitsu</strong>.
        </p>
      </footer>
    </div>
  );
}

export default Layout;