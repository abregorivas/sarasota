import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CardMedia } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import uuid from 'uuid';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  root: {
    position: 'relative',
    flexGrow: 1
  },
  media: {
    height: '100vh',
    overflow: 'hidden',
    width: '100%',
    display: 'block'
  }
});

const ImageSlider = ({ images }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const handleStepChange = step => setActiveStep(step);

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        interval={5000}
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {images.map((img, index) => (
          <div key={uuid()}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardMedia
                className={classes.media}
                component="img"
                image={img}
                title={img.title ? img.title : ''}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        dots={images.length}
        index={activeStep}
        onChangeIndex={handleStepChange}
      />
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default ImageSlider;
