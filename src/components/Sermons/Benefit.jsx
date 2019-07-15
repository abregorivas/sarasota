import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HeadSetIcon from '@material-ui/icons/HeadsetMic';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import { Grid, Card, CardContent, Avatar } from '@material-ui/core';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
  avatar: {
    margin: 10,
    textAlign: 'center'
  },
  avatarHeadSet: {
    backgroundColor: '#e67e22'
  },
  avatarHeart: {
    backgroundColor: '#c0392b'
  },
  avatarCloud: {
    backgroundColor: '#03a678'
  }
});

const Benefit = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar className={clsx(classes.avatar, classes.avatarHeadSet)}>
                <HeadSetIcon />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom={true}>
                Sermons
              </Typography>
              <Typography variant="body2">Listen online</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar className={clsx(classes.avatar, classes.avatarHeart)}>
                <PictureAsPdf />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom={true}>
                PDF
              </Typography>
              <Typography variant="body2">Read Notes</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar className={clsx(classes.avatar, classes.avatarCloud)}>
                <CloudDownloadIcon className={classes.avatraCloud} />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom={true}>
                Download
              </Typography>
              <Typography variant="body2">Save & share</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Benefit;
