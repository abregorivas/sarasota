import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FormatQuote from '@material-ui/icons/FormatQuoteRounded';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  leftQuoteMark: {
    position: 'relative',
    top: '42px',
    height: 42,
    width: 42,
    transform: `scale(-1, -1)`
  },
  quote: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    maxWidth: 500,
    fontStyle: 'oblique'
  },
  inverted: {
    color: 'white'
  }
}));

const BlockQuote = ({ quote, cite, invert }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormatQuote
        className={clsx(classes.leftQuoteMark, {
          [classes.inverted]: invert
        })}
        color="primary"
      />
      <Typography
        className={clsx(classes.quote, {
          [classes.inverted]: invert
        })}
        gutterBottom
        variant="body2"
        component="blockquote"
        color="textSecondary"
      >
        <em>{quote}</em>
        <br />
        {cite && (
          <Typography
            className={classes.cite}
            gutterBottom
            variant="overline"
            component="cite"
          >
            <em>{cite}</em>
          </Typography>
        )}
      </Typography>
    </React.Fragment>
  );
};

BlockQuote.propTypes = {
  cite: PropTypes.string,
  quote: PropTypes.string,
  invert: PropTypes.string
};

BlockQuote.defaultProps = {
  cite: '',
  quote: '',
  invert: null
};

export default BlockQuote;
