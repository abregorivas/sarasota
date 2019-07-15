import React from 'react';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import uuid from 'uuid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles({
  heading: {
    maxWidth: 500,
    fontWeight: 'bold'
  },
  listItem: {
    maxWidth: 500,
    '&:hover': {
      '&:hover': {
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
        border: `1px solid transparent`
      }
    }
  }
});

const RequirementsList = props => {
  const classes = useStyles();
  const { list } = props;
  return (
    <List>
      {list.map(item => (
        <ListItem key={uuid()} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar>></Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography={true}
            className={classes.heading}
            primary={
              <Typography variant="subtitle1">{item.heading}</Typography>
            }
            secondary={
              <Typography variant="subtitle2">{item.message}</Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RequirementsList;
