import React, { useState } from "react"
import SectionContainer from "../Shared/SectionContainer"
import { Avatar, Grid, Button, Slide, Dialog } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Search from "./Search"
import SectionHeading from "../Shared/SectionHeading"
import Benefit from "./Benefit"
import kenZindler from "../../images/kenZindler.jpg"
import ProfileCard from "./ProfileCard"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: `calc(100vh - 92px)`,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  avatar: {
    position: "absolute",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    border: `5px solid white`,
    height: 160,
    width: 160,
  },
  content: {
    maxWidth: 500,
    color: theme.palette.text.secondary,
    position: "relative",
  },
  button: {
    border: `1px solid #F5B733`,
    backgroundColor: "transparent",
    fontWeight: "bold",
    borderRadius: 0,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#F5B733",
    },
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
      <SectionContainer id="sermons">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} style={{ position: "relative" }}>
            <ProfileCard
              title="Ken Zindler"
              subtitle="Lead Evangelist"
              fabIcon={
                <Avatar
                  className={classes.avatar}
                  alt="Ken Zindler"
                  src={kenZindler}
                />
              }
              img="https://images.pexels.com/photos/2235/music-sound-communication-audio.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />

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
            <SectionHeading headings={["Audio For", "The Soul"]}>
              <Typography variant="body2" className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                dicta dolorem doloremque eos facilis molestiae nulla sed sequi?
                Aliquam ducimus eum eveniet expedita iure labore mollitia nemo
                neque quae similique?
              </Typography>
            </SectionHeading>
            <br />
            <Benefit />
            <Button
              className={classes.button}
              variant="outlined"
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
