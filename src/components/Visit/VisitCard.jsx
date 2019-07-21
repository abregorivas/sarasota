import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Fab,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(3),
    borderRadius: 0,
    boxShadow: 'none',
    border: `1px solid #eee`,
    '&:hover': {
      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
      border: `1px solid transparent`
    }
  },
  actions: {
    padding: 0
  },
  content: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1),
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  },
  icon: {
    color: 'tomato',
    marginLeft: theme.spacing(2)
  },
  fab: {
    position: 'relative',
    top: 0,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
}));

const VisitCard = ({ handleAction, cardInfo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={cardInfo.imgSrc} />
      <CardActions className={classes.actions}>
        <Link
          className={classes.fab}
          href={cardInfo.href ? cardInfo.href : null}
        >
          <Fab color="primary" aria-label="View Map" onClick={handleAction}>
            {cardInfo.icon}
          </Fab>
        </Link>
      </CardActions>
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" component="h6">
          {cardInfo.title}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {cardInfo.venue}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {cardInfo.time}
        </Typography>
        <Typography variant="body2" component="p">
          {cardInfo.addr1}
        </Typography>
        <Typography variant="body2" component="p">
          {cardInfo.addr2}
        </Typography>
      </CardContent>
    </Card>
  );
};

VisitCard.propTypes = {
  cardInfo: PropTypes.shape({
    title: PropTypes.string,
    venue: PropTypes.string,
    time: PropTypes.string.isRequired,
    addr1: PropTypes.string.isRequired,
    addr2: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    icon: PropTypes.node,
    href: PropTypes.string,
    handleAction: PropTypes.func
  }).isRequired,
  handleAction: PropTypes.func.isRequired
};

export default VisitCard;
