import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MissionAvatar from './MissionAvatar';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "God's Love",
    color: '#d64541',
    monogram: 'G',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Spiritual Foundation',
    color: '#52b3d9',
    monogram: 'S',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Fellowship',
    color: '#2ecc71',
    monogram: 'F',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0
  },
  quote: {
    maxWidth: 500,
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    paddingTop: 0,
    paddingLeft: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  citation: {
    display: 'block',
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%'
  },
  card: {
    borderRadius: 0
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Card className={classes.card}>
                <CardContent>
                  <MissionAvatar
                    color={step.color}
                    text={step.label}
                    scripture=""
                    monogram={step.monogram}
                    tip="Dear friends, since God so loved us, we also ought to love
                    one another. No one has ever seen God; but if we love one
                    another, God lives in us and his love is made complete in
                    us"
                  />
                  <Typography
                    gutterBottom
                    className={classes.quote}
                    variant="caption"
                    component="blockquote"
                  >
                    <em>
                      Dear friends, since God so loved us, we also ought to love
                      one another. No one has ever seen God; but if we love one
                      another, God lives in us and his love is made complete in
                      us
                    </em>
                    <br />
                    <cite className={classes.citation}>
                      <em>Luke 14:28-30</em>
                    </cite>
                  </Typography>
                </CardContent>
              </Card>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default SwipeableTextMobileStepper;
