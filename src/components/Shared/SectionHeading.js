import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    heading: {
      color: theme.palette.text.primary,
      fontWeight: 'bold'
    },
    subHeading: {
      color: theme.palette.text.secondary
    }
  })
);

const SectionHeading = props => {
  const classes = useStyles();
  const { heading, subHeading, align } = props;

  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        variant="h4"
        className={classes.heading}
        component="h3"
        align={align}
      >
        {heading}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        className={classes.subHeading}
        component="p"
        align={align}
      >
        {subHeading}
      </Typography>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  align: PropTypes.string
};

export default SectionHeading;
