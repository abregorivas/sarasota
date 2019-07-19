import React from 'react';
import PropTypes from 'prop-types';
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
    textAlign: 'center',
    cursor: 'pointer'
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

const Benefit = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar
                className={clsx(classes.avatar, classes.avatarHeadSet)}
                onClick={handleClick}
              >
                <HeadSetIcon />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom>
                Sermons
              </Typography>
              <Typography variant="body2">Listen online</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar
                className={clsx(classes.avatar, classes.avatarHeart)}
                onClick={handleClick}
              >
                <PictureAsPdf />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom>
                PDF
              </Typography>
              <Typography variant="body2">Read Notes</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Avatar
                className={clsx(classes.avatar, classes.avatarCloud)}
                onClick={handleClick}
              >
                <CloudDownloadIcon className={classes.avatarCloud} />
              </Avatar>
              <Typography variant="subtitle1" gutterBottom>
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

Benefit.propTypes = {
  handleClick: PropTypes.func
};

Benefit.defaultProps = {
  handleClick: null
};

export default Benefit;
