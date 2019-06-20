import React from "react"
import { Button, Grid } from "@material-ui/core"
import SectionContainer from "../Shared/SectionContainer"
import MissionLetter from "./MissionLetter"
import { makeStyles, createStyles } from "@material-ui/styles"
import Missions from "./Missions"
import DialogContainer from "../Shared/DialogContainer"
import ImgCard from '../Shared/ImgCard'
import SectionHeading from "../Shared/SectionHeading"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
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
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(4),
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
        <Grid container spacing={4} alignItems="center">

          <Grid item xs={12} md={6} className={classes.image}>
            <ImgCard
              imgSrc={"https://images.pexels.com/photos/6357/coffee-cup-desk-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
/>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionHeading heading="Our Mission"
                            subHeading="Love, Spiritual Foundation, Fellowship"
            />
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
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Mission