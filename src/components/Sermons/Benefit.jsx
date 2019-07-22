import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HeadSetIcon from '@material-ui/icons/HeadsetMic';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import { Grid, Card, CardContent } from '@material-ui/core';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    height: 48,
    width: 48,
    marginBottom: theme.spacing(1)
  },
  avatarHeadSet: {
    color: '#e67e22'
  },
  avatarPDF: {
    color: '#c0392b'
  },
  avatarCloud: {
    color: '#03a678'
  }
}));

const Benefit = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <HeadSetIcon
                className={clsx(classes.avatarHeadSet, classes.icon)}
              />
              <Typography variant="subtitle1" gutterBottom>
                Listen
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <PictureAsPdf className={clsx(classes.avatarPDF, classes.icon)} />
              <Typography variant="subtitle1" gutterBottom>
                Read
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <CloudDownloadIcon className={clsx(classes.avatarCloud, classes.icon)} />
              <Typography variant="subtitle1" gutterBottom>
                Download
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Benefit;
