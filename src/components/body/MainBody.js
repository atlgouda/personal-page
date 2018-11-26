import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'


const GridDiv = styled.div`
  margin-left: 5%;
  @media (max-width: 800px) {

    text-align: center;
    font-size: 12px;
  }
`
const BodyDiv = styled.div`
  background-color: #45ADA8;
  height: 50vh;

`

const styles = theme => ({
  root: {
    
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
});




function CenteredGrid(props) {
  const { classes } = props;

  return (
    <BodyDiv>
      <GridDiv>
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={7}>
          <Paper className={classes.paper}>
          <h2>Experience</h2>
          <p>Full stack developer who loves learning, building, and tinkering.  Tasks that are tedious for others are my joy, since they are the path to the creations that began as my thoughts.</p>
          <p>Skills include: Git, Github, HTML, CSS, JavaScript, jQuery, Node, Express, MongoDB, Mongoose, React, Heroku, SQL, and Ruby on Rails</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h2>Links</h2>
          <p><a className='linkpage' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gouda-clark/'>LinkedIn</a></p>
          <p><a className='linkpage' target="_blank" rel="noopener noreferrer" href='https://twitter.com/ATLGouda'>Twitter</a></p>
          <p><a className='linkpage' target="_blank" rel="noopener noreferrer" href="https://github.com/atlgouda">Github</a></p>
          </Paper>
        </Grid>

      </Grid>
    </div>
    </GridDiv>
    </BodyDiv>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
