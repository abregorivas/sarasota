import React, { useState } from "react"
import SectionContainer from "../Shared/SectionContainer"
import {
  Grid,
  Button,
  Slide,
  Dialog,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Search from "./Search"
import ImgCard from '../Shared/ImgCard'
import SectionHeading from '../Shared/SectionHeading'
import Benefits from "./Benefits"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f3f1ef",
  },
  inline: {},
  text: {
    color: "#2e3131",
    paddingRight: theme.spacing(2),

  },
  button: {
    margin: "0 auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4)
  },
}))


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Sermon = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <SectionContainer id="sermons" >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImgCard imgSrc={"https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>

            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <Search handleClose={handleClose} />
            </Dialog>

          </Grid>
          <Grid item xs={12} md={6}>
            <SectionHeading heading="Sermons" subHeading="Audio for the Heart, Mind & Soul "/>
            <Benefits/>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
            >
              Listen Now
            </Button>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Sermon
