import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Divider,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Donation from './Donation';
import SiteMap from './SiteMap';
import Visit from './Visit';
import ipiLogo from '../../assets/images/ipilogo.png';
import PrivacyPolicy from './PrivacyPolicy';
import DialogContainer from '../common/DialogContainer';
import SectionContainer from '../common/SectionContainer';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1e1c27',
    color: '#FEFEFE'
  },
  caption: {
    color: '#7D7C7C'
  },
  card: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none'
  }
});

const Footer = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);

  const handleOpen = () => {
    setStatus(true);
  };

  const handleClose = () => {
    setStatus(false);
  };

  return (
    <div className={classes.root}>
      <SectionContainer id="footer">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Visit Us</Typography>
            <Visit />
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Donation</Typography>
            <br />
            <Donation />
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Partnership</Typography>
            <br />
            <Typography variant="body2" className={classes.caption}>
              Want to learn more about God? IPI Books is a great resource to
              further your spiritual life.
            </Typography>
            <br />
            <Card className={classes.card}>
              <Link
                href="https://www.ipibooks.com/"
                target="_blank"
                rel="noopener"
              >
                <CardMedia component="img" image={ipiLogo} />
              </Link>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Site Map</Typography>
            <SiteMap toggleModal={() => handleOpen()} />
            <DialogContainer
              title="Privacy Policy"
              open={status}
              handleClose={() => handleClose()}
            >
              <PrivacyPolicy />
            </DialogContainer>
          </Grid>
        </Grid>
        <Divider light component="hr" />
        <Typography variant="overline">
          &copy; Copyright: 2019 Perfect Paradox | All rights reserved
        </Typography>
      </SectionContainer>
    </div>
  );
};

export default Footer;
