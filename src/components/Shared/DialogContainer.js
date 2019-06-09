import React from "react"
import PropTypes from "prop-types"
import CloseIcon from "@material-ui/icons/Close"
import { makeStyles, createStyles } from "@material-ui/styles"
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Dialog,
  IconButton,
  Slide,
} from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({ container: { marginTop: "80" } })
)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogContainer = props => {
  const classes = useStyles()
  const { title, open, handleClose, children } = props
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>{children}</Container>
    </Dialog>
  )
}

DialogContainer.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
}

export default DialogContainer
