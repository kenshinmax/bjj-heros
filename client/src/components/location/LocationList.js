import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import LocationItem from '../../components/location/LocationItem'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});



class LocationList extends React.Component {
	state = {
		dense: false,
		secondary: false
	}
  
  componentWillMount() {
    this.props.fetchLocations();
  }

  renderLocations(locations) {

    return locations.map((location) => {

      return (
         <LocationItem key={ location.id } {...location} />
      );
    });
  }
	render() {
		const { classes } = this.props;
		const { dense, secondary } = this.state;
    const { locations, loading, error } = this.props.locationList;

    if(loading) {
      return <div className="container"><h1>Locations</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

		return (
	     <div className={classes.root}>
          <Grid item xs={12} md={12}>
            <Typography variant="title" className={classes.title}>
              Locations
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                { this.renderLocations(locations) }
              </List>
            </div>
          </Grid>
         </div>
		)
	}
}

LocationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationList);