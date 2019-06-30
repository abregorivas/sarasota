import React, { useState } from "react"
import { Typography, Grid, Card, CardMedia } from "@material-ui/core"
import Donation from "./Donation"
import SiteMap from "./SiteMap"
import Visit from "./Visit"
import ipiLogo from "../../images/ipilogo.png"
import PrivacyPolicy from "./PrivacyPolicy"
import { makeStyles } from "@material-ui/styles"
import DialogContainer from "../Shared/DialogContainer"
import SectionContainer from "../Shared/SectionContainer"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#231E1F",
    color: "#FEFEFE",
  },
  caption: {
    color: "#7D7C7C",
  },
  card: {
    width: "80%",
    height: "auto",
    margin: `0 auto`,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  },
})

const Footer = () => {
  const classes = useStyles()
  const [status, setStatus] = useState(false)

  const handleOpen = () => {
    setStatus(true)
  }

  const handleClose = status => {
    setStatus(status)
  }

  return (
    <div className={classes.root}>
      <SectionContainer id="footer">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Visit Us</Typography>
            <Visit />
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Donation</Typography>
            <br />
            <Donation />
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Partnership</Typography>
            <br />
            <Typography variant="body2" className={classes.caption}>
              Want to learn more about God? IPI Books is a great resource to
              further your spiritual life.
            </Typography>
            <br />
            <Card className={classes.card}>
              <CardMedia component="img" image={ipiLogo} />
            </Card>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Site Map</Typography>
            <SiteMap toggleModal={() => handleOpen()} />
            <DialogContainer
              title="Privacy Policy"
              open={status}
              handleClose={() => handleClose()}
            >
              <PrivacyPolicy />
            </DialogContainer>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Footer
