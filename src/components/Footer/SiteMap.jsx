import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { makeStyles } from '@material-ui/styles';
import { Button, List, ListItem, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingLeft: 0
  },
  link: {
    color: '#7D7C7C',
    paddingLeft: 0
  },
  root: {
    fontSize: 10
  }
}));

const Sitemap = ({ toggleModal }) => {
  const classes = useStyles();
  const [listItems] = useState([
    'Mission',
    'Services',
    'Sermons',
    'Internship',
    'Contact'
  ]);
  return (
    <List component="nav">
      {listItems.map(item => (
        <ListItem component="li" key={uuid()} className={classes.listItem}>
          <Link
            component="a"
            href={`#${item}`}
            variant="body2"
            className={classes.link}
          >
            {item}
          </Link>
        </ListItem>
      ))}
      <ListItem
        component="li"
        className={classes.listItem}
        onClick={toggleModal}
      >
        <Button size="small" className={classes.root} color="secondary">
          Privacy Policy
        </Button>
      </ListItem>
    </List>
  );
};

Sitemap.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Sitemap;
