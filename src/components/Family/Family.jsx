import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import familyData from '../../api/familyApi';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';
import ImgGallery from '../common/ImgGallery';
import BlockQuote from '../common/BlockQuote';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto'
    }
  },
  button: {
    border: `1px solid #F5B733`,
    backgroundColor: '#FEFEFE',
    fontWeight: 'bold',
    borderRadius: 0,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#F5B733'
    }
  },
  content: {
    maxWidth: 500,
    color: theme.palette.text.secondary
  },
  familyImg: {
    boxShadow: 'none',
    margin: theme.spacing(2),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      maxWidth: 800
    }
  }
}));

const Family = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <SectionContainer id="Family">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={`${matches}` === 'true' ? 'column-reverse' : 'row'}
        >
          <Grid container item xs={12} md={6}>
            <SectionHeading headings={['Love Is', 'Our Glue']} />
            <Grid item xs={12} md={11}>
              <Typography className={classes.content} variant="body2">
                Here at the Sarasota Christian Fellowship we believe that family
                is a priority. We also recognize that our fellowship is a very
                important family. Jesus responded to his critics regarding the
                importance of his spiritual family:
              </Typography>
              <BlockQuote
                quote={`A crowd was sitting around him, and they told him, "Your
mother and brothers are outside looking for you." "Who are my mother and my brothers?" he
asked. Then he looked at those seated in a circle around him and said, "Here are my mother and
my brothers! Whoever does God's will is my brother and sister and mother."`}
                cite="Mark 3:32-35"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6} spacing={1} wrap="wrap">
            <ImgGallery tileData={familyData} />
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Family;
