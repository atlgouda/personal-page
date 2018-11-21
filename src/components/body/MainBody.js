import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const GridDiv = styled.div`
  margin-left: 5%;
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
          <p>General Assembly: Web Development Immersive</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h2>Links</h2>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Github</p>
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
