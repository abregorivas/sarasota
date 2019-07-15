import React, { useState } from 'react';
import SectionContainer from '../common/SectionContainer';
import {
  Avatar,
  Grid,
  Button,
  Slide,
  Dialog,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Search from './Search';
import SectionHeading from '../common/SectionHeading';
import Benefit from './Benefit';
import kenZindler from '../../assets/images/kenZindler.jpg';
import ProfileCard from './ProfileCard';
import microphone from '../../assets/images/microphone.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  avatar: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    border: `5px solid white`,
    height: 160,
    width: 160
  },
  content: {
    maxWidth: 500,
    color: theme.palette.text.secondary,
    position: 'relative'
  },
  button: {
    border: `1px solid #F5B733`,
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderRadius: 0,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#F5B733'
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Sermon = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <SectionContainer id="sermons">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} style={{ position: 'relative' }}>
            <ProfileCard
              title="Ken Zindler"
              subtitle="Lead Evangelist"
              fabIcon={
                <Avatar
                  className={classes.avatar}
                  alt="Ken Zindler"
                  src={kenZindler}
                />
              }
              img={microphone}
            />

            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <Search handleClose={handleClose} />
            </Dialog>
          </Grid>

          <Grid item xs={12} md={6}>
            <SectionHeading headings={['Audio For', 'The Soul']}>
              <Typography variant="body2" className={classes.content}>
                We are making our weekly sermons, along with the PDF notes (to
                follow along with the sermon) available to the general public.
                For those in the ministry, the sermon notes are not copyrighted
                so you are free to download the outlines and use them any way
                you choose. Our goal in providing these services is to further
                spread the gospel of Jesus (free of charge). We hope that these
                lessons will strengthen your spiritual walk and provide solid,
                doctrinal guidance for all those seeking to draw closer to the
                Lord.
              </Typography>
            </SectionHeading>
            <br />
            <Benefit />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickOpen}
            >
              Listen Now
            </Button>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Sermon;
