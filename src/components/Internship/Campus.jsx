import React from 'react';
import { Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import uuid from 'uuid';
import campusInfo from '../../api/campusApi';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(3),
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      height: 120
    },
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2)
  },
  media: { padding: theme.spacing(2) }
}));

const Campus = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {campusInfo.map(item => (
        <Grid item xs={6} sm={4} lg={2} key={uuid()}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Card raised className={classes.card}>
              <CardMedia
                component="img"
                className={classes.media}
                image={item.img}
              />
            </Card>
          </a>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Campus;
