import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/css/style.css'
import Notifications, {notify} from 'react-notify-toast';

export const Layout = props => {

  return (
    <div className="app-container">
      <header>
        <Link to="/">
          <img className="logo" src="/styles/images/bjjheros-logo.png" alt="BJJ Heroes logo" />
        </Link>
      </header>
      <Notifications options={{zIndex: 200, top: '50px'}}/>
      <div className="app-content">{props.children}</div>
      <footer>
        <p>
          This is an app for <strong>Brazilian Jiu Jitsu</strong> athletes.
        </p>
      </footer>
    </div>
  );
}

export default Layout;