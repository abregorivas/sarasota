import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    height: '100%'
  }
});

const ImgCard = ({ imgSrc }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised>
      <CardMedia component="img" src={imgSrc} />
    </Card>
  );
};

ImgCard.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default ImgCard;
