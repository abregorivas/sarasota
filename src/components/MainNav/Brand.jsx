import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/images/scf-logo-lg.png';

const useStyles = makeStyles(theme => ({
  brand: {
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 0
  },
  brandText: {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    height: 80,
    width: 80
  }
}));

const Caption = ({ text }) => (
  <Typography variant="body2" color="textSecondary">
    {text}
  </Typography>
);

Caption.propTypes = { text: PropTypes.string };
Caption.defaultProps = { text: 'Some text' };

const Brand = () => {
  const classes = useStyles();
  return (
    <div className={classes.brand}>
      <Link to="/" component="a">
        <img src={logo} alt="" className={classes.logo} />
      </Link>
      <div className={classes.brandText}>
        <Caption text="Faith does not make things easy;" />
        <Caption text="It makes things possible." />
        <Caption text="Luke 1:37" />
      </div>
    </div>
  );
};

export default Brand;
