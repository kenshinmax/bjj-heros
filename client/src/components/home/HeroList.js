import React, { Component } from 'react'
import { Link } from 'react-router'
import HeroCard from '../../components/home/HeroCard'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  grid: {
    paddingTop: 20,
  }
});

class HeroList extends Component {
  state = {
    spacing: '24',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentWillMount() {
    this.props.fetchHeros();
  }

  renderHeros(heroes) {
    return heroes.map((hero) => {
      return (
         <HeroCard key={ hero.id } {...hero} />
      );
    });
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const { heroes, loading, error } = this.props.heroList;

    if(loading) {
      return <div className="container"><h1>Heros</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <Grid container className={classes.grid} justify="center" spacing={Number(spacing)}>
          {this.renderHeros(heroes)}
      
      </Grid>
    );
  }
}

HeroList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(HeroList)