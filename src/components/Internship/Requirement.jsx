import React from 'react';
import RequirementsList from './RequirementsList';
import Campus from './Campus';
import { requirements } from '../../Api/internship';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Requirement = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '80px', display: 'flex' }}>
      <RequirementsList list={requirements.slice(0, 16)} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="subtitle1">
          You would be sharing your faith at these compuses.
        </Typography>
        <br />
        <Campus />
      </main>
    </div>
  );
};

export default Requirement;
