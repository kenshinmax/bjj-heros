import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class LocationItem extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render(){

  const { id, name, address, city, state, zipcode, phone} = this.props
  const { spacing } = this.state
  
    return (
      <ListItem>
       
        <ListItemText
          primary={name}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

}

LocationItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationItem);

