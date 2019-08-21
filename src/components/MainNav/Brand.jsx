import React from 'react';
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

const Brand = () => {
  const classes = useStyles();
  return (
    <div className={classes.brand}>
      <Link to="/" component="a">
        <img src={logo} alt="" className={classes.logo} />
      </Link>
      <div className={classes.brandText}>
        {[
          'Faith does not make things easy;',
          'It makes things possible.',
          'Luke 1:37'
        ].map(text => (
          <Typography variant="body2" color="textSecondary">
            {text}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Brand;
