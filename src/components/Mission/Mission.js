import React from "react"
import { Typography, Button, Card, CardMedia, Grid } from "@material-ui/core"
import SectionContainer from "../Shared/SectionContainer"
import MissionLetter from "./MissionLetter"
import { makeStyles, createStyles } from "@material-ui/styles"
import Missions from "./Missions"
import DialogContainer from "../Shared/DialogContainer"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#f3f1ef",
    },
    quote: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      paddingTop: 0,
      paddingLeft: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    citation: {
      display: "block",
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
    },
    button: {
      margin: "0 auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    card: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)

const Mission = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <SectionContainer id="mission">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Typography gutterBottom variant="h4" component="h3">
              Our Mission
            </Typography>
            <Missions />
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
            >
              Learn More
            </Button>

            <DialogContainer
              title="Mission Statement"
              open={open}
              handleClose={() => handleClose()}
            >
              <MissionLetter />
            </DialogContainer>
          </Grid>
          <Grid item xs={12} md={7} className={classes.image}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.media}
                component="img"
                src="https://images.pexels.com/photos/6357/coffee-cup-desk-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Mission
