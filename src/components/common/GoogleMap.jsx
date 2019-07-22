import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';

const styles = theme =>
  createStyles({
    modalCard: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    },
    modalMedia: {
      width: 600,
      height: 400,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 360,
        maxHeight: 260
      }
    }
  });

class GoogleMap extends PureComponent {
  render() {
    const { url, classes } = this.props;
    return (
      <Card className={classes.modalCard}>
        <CardMedia
          className={classes.modalMedia}
          component="iframe"
          image={url}
        />
      </Card>
    );
  }
}

GoogleMap.propTypes = {
  url: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    modalCard: PropTypes.string,
    modalMedia: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(GoogleMap);
