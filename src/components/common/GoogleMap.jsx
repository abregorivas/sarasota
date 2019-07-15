import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@material-ui/core';

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
  url: PropTypes.string,
  classes: PropTypes.object
};

export default GoogleMap;
