import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const fullName = (first, last) => {
	return first + " " + last
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 0,
    paddingBottom: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 10,
    height: 150,
    width: 180
  },
});

class HeroCard extends React.Component {
 state = {
  spacing: '24'
 }
 render() {
 	const { classes } = this.props
 	const { id, image, firstname, lastname } = this.props
  const { spacing } = this.state
    return (
      <Link to={`/hero/${id}`}>
  	   <Grid item xs spacing={Number(spacing)}>
  	     <Paper className={classes.paper}>
  	     <img style={{width: 180 + 'px', height: 132+ 'px'}} src={`styles/images/${image}`} alt={`${fullName(firstname, lastname)}'s profile`} />
  	     <Typography noWrap>{fullName(firstname, lastname)}</Typography>
  	     </Paper>
  	   </Grid>
	  </Link>
    )
 }
}

HeroCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroCard)