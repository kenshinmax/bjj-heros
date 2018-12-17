import React from 'react'
import { Link } from 'react-router-dom'
import Notifications, {notify} from 'react-notify-toast';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 10,
  },
});

class Layout extends React.Component {
   state = {
    auth: true,
    anchorEl: null,
  };

  render() {
  
      return (
       
        <div className={styles.root}>
         <Notifications options={{zIndex: 200, top: '50px'}}/>
          <main className={styles.content}>
           <div className={styles.toolbar} />
            {this.props.children}
          </main>
        </div>
      );
   }
}

export default Layout;