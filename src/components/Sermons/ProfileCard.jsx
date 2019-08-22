import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Fab,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(3),
    borderRadius: 0,
    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
    border: `1px solid transparent`,
    backgroundColor: 'white',
  },
  actions: {
    padding: 0,
  },
  content: {
    textAlign: 'center',
  },

  icon: {
    color: 'tomato',
    marginLeft: theme.spacing(2),
  },
  fab: {
    position: 'relative',
    top: 0,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  media: {
    height: 300,
  },
}));

const ProfileCard = ({ img, title, subtitle, fabIcon, href }) => {
  const classes = useStyles();

  return (
    <Card raised className={classes.root}>
      <CardMedia component="img" image={img} className={classes.media} />
      <CardActions className={classes.actions}>
        <Link className={classes.fab} href={href || null}>
          <Fab color="primary" aria-label="View Map">
            {fabIcon}
          </Fab>
        </Link>
      </CardActions>
      <br />
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" component="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {subtitle}
        </Typography>
        <br />
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  fabIcon: PropTypes.node.isRequired,
  href: PropTypes.string,
};
ProfileCard.defaultProps = {
  href: '',
};

export default ProfileCard;
