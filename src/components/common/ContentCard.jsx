import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      padding: theme.spacing(4),
      paddingTop: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    content: {
      backgroundColor: 'transparent',
      padding: 0
    }
  })
);

const ImgCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardContent className={classes.content}>{children}</CardContent>
    </Card>
  );
};

ImgCard.propTypes = {
  children: PropTypes.node
};

export default ImgCard;
