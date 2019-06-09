import React from "react"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import Requirements from "./Requirements"
import intershipImg from "../../images/Internship.jpeg"
import JobDescription from "./JobDescription"
import DialogContainer from "../Shared/DialogContainer"
import { Card, CardMedia, Grid, Button } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    media: { height: "auto" },
    button: {
      marginTop: theme.spacing(4),
    },
  })
)

const Internship = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <SectionContainer id="internship">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={5} md={6}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.media}
                component="img"
                image={intershipImg}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <SectionHeading heading="Internship" />
            <JobDescription />
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickOpen}
              color="primary"
            >
              View Requirements
            </Button>

            <DialogContainer
              title="Intership Requirements"
              open={open}
              handleClose={() => handleClose()}
            >
              <Requirements />
            </DialogContainer>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Internship
