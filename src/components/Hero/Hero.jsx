import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Button, Typography, Link } from '@material-ui/core';
import ImageSlider from '../common/ImageSlider';
import lighthouse from '../../assets/images/hero/lighthouse.jpg';
import sarasota from '../../assets/images/hero/sarasota.jpg';
import seaStar from '../../assets/images/hero/sea-star.jpg';
import handsup from '../../assets/images/hero/handsup.jpg';
import sandals from '../../assets/images/hero/sandals.jpg';
import BlockQuote from '../common/BlockQuote';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    boxShadow: 'none',
    height: '100vh',
    backgroundColor: '#303D4D',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: theme.spacing(4),
    transform: `translate(-50%, -50%)`,
    textAlign: 'left',
    color: 'white',
    opacity: '50%',
    background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
      )`,
    width: '45%',
    top: `57%`,
    left: '22%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      left: '35%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      left: '50%',
    },
  },
  heading: {
    textTransform: 'uppercase',
    color: 'white',
  },
  button: {
    display: 'inline-block',
    width: 200,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#ffa000',
    borderColor: '#ffa000',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    '&:hover': {
      borderColor: 'white',
      color: 'white',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Card className={classes.card}>
        <ImageSlider
          images={[sarasota, handsup, lighthouse, sandals, seaStar]}
        />
        <CardContent className={classes.content}>
          <Typography variant="h2" gutterBottom className={classes.heading}>
            Sarasota
          </Typography>
          <Typography variant="h4" gutterBottom>
            Christian Fellowship
          </Typography>
          <BlockQuote
            invert="true"
            cite="1 Corinthians 13:13"
            quote="And now these three remain; Faith, Hope and Love. But the greatest of these is Love."
          />
          <Link component="a" variant="body2" href="#visit">
            <Button variant="outlined" className={classes.button}>
              Join us
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
export default Hero;
