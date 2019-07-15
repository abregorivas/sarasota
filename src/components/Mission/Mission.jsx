import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import SectionContainer from '../common/SectionContainer';
import MissionLetter from './MissionLetter';
import { makeStyles } from '@material-ui/styles';
import DialogContainer from '../common/DialogContainer';
import ImgCard from '../common/ImgCard';
import SectionHeading from '../common/SectionHeading';
import BlockQuote from '../common/BlockQuote';

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
  quote: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    paddingTop: 0,
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  citation: {
    display: 'block',
    marginTop: theme.spacing(2)
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

const Mission = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root} id="mission">
      <SectionContainer>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImgCard
              imgSrc={
                'https://images.pexels.com/photos/6357/coffee-cup-desk-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionHeading
              headings={['Our Mission']}
              subHeading="Love, Spiritual Foundation, Fellowship"
            />
            <Typography
              className={classes.content}
              variant="body2"
              gutterBottom={true}
            >
              Sarasota Christian Fellowship is a non-denominational fellowship
              with our roots in the Restoration movement. We strongly embrace
              the scripture in
              <em>1 John 4:11-12.</em>
            </Typography>
            <Typography className={classes.content} variant="body2">
              Loving God is the motivation for everything we do in our Christian
              walk, both in our relationships with one another and in our
              personal lives.
            </Typography>
            <BlockQuote
              cite="1 John 4:11-12"
              quote={`Dear friends, since God so loved us, we also ought to love one
            another. No one has ever seen God; but if we love one another, God
            lives in us and his love is made complete in us.`}
            />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickOpen}
            >
              Learn More
            </Button>

            <DialogContainer
              title="Mission Statement"
              open={open}
              handleClose={() => handleClose()}
            >
              <MissionLetter />
            </DialogContainer>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Mission;
