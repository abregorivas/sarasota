import React from 'react';
import {
  Grid,
  Button,
  Typography,
  Divider,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import ImgCard from '../common/ImgCard';
import RequirementList from './RequirementsList';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';
import intershipImg from '../../assets/images/Internship.jpeg';
import DialogContainer from '../common/DialogContainer';
import { requirements } from '../../api/internship';
import Campus from './Campus';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FEFEFE',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto'
    }
  },
  button: {
    border: `1px solid #F5B733`,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    borderRadius: 0,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#f5b733'
    }
  },
  content: {
    maxWidth: 500,
    color: theme.palette.text.secondary,
    position: 'relative'
  }
}));

const Internship = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root} id="internship">
      <SectionContainer>
        <Grid
          container
          spacing={8}
          alignItems="center"
          direction={`${matches}` === 'true' ? 'column-reverse' : 'row'}
        >
          <Grid container item xs={12} md={6}>
            <SectionHeading headings={['Internship']} />

            <Typography
              className={classes.content}
              variant="body2"
              gutterBottom
            >
              The goal of this internship program is to train a young man in the
              fundamentals of ministry&#44; and give him a realistic perspective
              &#40;expectations&#44; spiritual preparedness&#44; and
              relationships&#41; on a minister&#39;s personal life&#46; An
              intern should be prepared to deepen their knowledge and
              application of scripture in both academic and practical
              settings&#46;
            </Typography>
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickOpen}
            >
              View Requirements
            </Button>
          </Grid>
          <DialogContainer
            title="Intership Requirements"
            open={open}
            handleClose={() => handleClose()}
          >
            <Grid container style={{ marginTop: '80px' }}>
              <Grid item xs={12} sm={6}>
                <RequirementList list={requirements.slice(0, 8)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RequirementList list={requirements.slice(8, 16)} />
              </Grid>
            </Grid>
            <br />
            <br />
            <Divider />
            <br />
            <br />
            <Grid container spacing={1} wrap="wrap">
              <Grid item xs={12}>
                <Typography variant="subtitle1">Campus Locations</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  You will have the opportunity to sharing your faith at each of
                  these campuses.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} wrap="wrap">
              <Campus />
            </Grid>
          </DialogContainer>

          <Grid item xs={12} md={6}>
            <ImgCard imgSrc={intershipImg} />
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Internship;
