import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingLeft: 0
  },
  inline: {
    display: 'block',
    color: '#7D7C7C'
  }
}));

const EventInfo = props => {
  const classes = useStyles();
  return (
    <Fragment>
      {Object.keys(props).map(key => (
        <Typography key={uuid()} component="span" variant="body2" className={classes.inline}>
          {props[key]}
        </Typography>
      ))}
    </Fragment>
  );
};

const Event = ({ name, ...eventInfo }) => {
  const classes = useStyles();
  return (
    <ListItem
      component="li"
      alignItems="flex-start"
      className={classes.listItem}
    >
      <ListItemText primary={name} secondary={<EventInfo {...eventInfo} />} />
    </ListItem>
  );
};

Event.propTypes = {
  name: PropTypes.string
};

Event.defaultProps = {
  name: 'Event Name'
};

export default Event;
