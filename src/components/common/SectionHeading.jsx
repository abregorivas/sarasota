import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import uuid from 'uuid';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    heading: {
      color: theme.palette.text.primary,
      fontWeight: 'bold'
    }
  })
);

const SectionHeading = ({ headings, align, children }) => {
  const classes = useStyles();

  // noinspection JSRemoveUnnecessaryParentheses
  return (
    <div className={classes.root}>
      {headings.map(heading => (
        <Typography
          key={uuid()}
          gutterBottom
          variant="h3"
          className={classes.heading}
          component="h3"
          align={align}
        >
          {heading}
        </Typography>
      ))}
      {children}
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  align: PropTypes.string
};

SectionHeading.defaultProps = {
  children: null,
  heading: "Section Heading",
  subHeading: "Subheading",
  align: 'inherit'
};

export default SectionHeading;
