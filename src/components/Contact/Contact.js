import React from "react"
import ContactForm from "./ContactForm"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import { makeStyles, createStyles } from "@material-ui/styles"

import { Card, CardHeader, CardMedia, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    media: {
      height: 400,
    },
  })
)

const Contact = props => {
  const classes = useStyles()
  return (
    <SectionContainer id="contact">
      <SectionHeading
        heading="Contact"
        subHeading="Reach us in person or send us an email"
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={6}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              title="Church Service"
              subheader="Sunday 1:30pm"
            />
            <CardMedia
              className={classes.media}
              component="iframe"
              image="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3545.6756559534037!2d-82.4961104!3d27.2920354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c341231d123a0f%3A0xa0f2c3ff52d67277!2s3773+Wilkinson+Rd%2C+Sarasota%2C+FL+34233!5e0!3m2!1sen!2sus!4v1522223872516"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={7} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

export default Contact
