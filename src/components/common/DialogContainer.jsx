import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Dialog,
  IconButton,
  Slide
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '80'
  },
  title: {
    marginLeft: theme.spacing(2),
    textTransform: 'uppercase'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  colorPrimary: {
    color: theme.palette.secondary
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogContainer = props => {
  const classes = useStyles();
  const { title, open, handleClose, children } = props;
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <div>{children}</div>
      </Container>
    </Dialog>
  );
};

DialogContainer.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node
};

export default DialogContainer;
