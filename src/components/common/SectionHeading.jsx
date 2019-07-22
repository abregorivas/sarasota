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
      fontWeight: 'bold',
      textAlign: 'left'
    }
  })
);

const SectionHeading = ({ headings, children }) => {
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
  headings: PropTypes.arrayOf(PropTypes.string)
};

SectionHeading.defaultProps = {
  children: null,
  headings: 'Section Heading'
};

export default SectionHeading;
