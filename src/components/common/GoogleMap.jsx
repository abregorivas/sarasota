import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  modalCard: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  modalMedia: {
    width: 600,
    height: 400,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 360,
      maxHeight: 260
    }
  }
}));

const GoogleMap = ({ url }) => {
  const classes = useStyles();
  return (
    <Card className={classes.modalCard}>
      <CardMedia
        className={classes.modalMedia}
        component="iframe"
        image={url}
      />
    </Card>
  );
};

GoogleMap.propTypes = {
  url: PropTypes.string.isRequired
};

export default GoogleMap;
