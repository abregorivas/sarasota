import React, { useState } from "react"
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  Modal,
} from "@material-ui/core"

import Donation from "./Donation"
import Sitemap from "./SiteMap"
import Visitus from "./Visit"
import ipiLogo from "../../images/ipilogo.png"
import PrivacyPolicy from "./PrivacyPolicy"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      backgroundColor: "#231E1F",
      color: "#FEFEFE",
      margin: 0,
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
)

const Footer = props => {
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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={status}
        onClose={() => handleClose(false)}
      >
        <PrivacyPolicy />
      </Modal>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">Visit Us</Typography>
            <Visitus />
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
            <Sitemap toggleModal={() => handleOpen()} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
