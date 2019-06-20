import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 80
    },
    text: {
      marginBottom: theme.spacing(2),
    },
  })
)

const PrivacyPolicy = props => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} style={{ marginTop: "80px" }}>
      <Grid item xs={12} sm={8}>
        <Typography gutterBottom variant="h4" component="h4">
          Privacy Policy
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          By accessing or using the Sarasota Christian Fellowship website, you
          agree to the terms of this Online Privacy Policy, as outlined below.
          If you do not agree to these terms, please do not access or use this
          site.
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          When you engage in certain activities on this site, you may be asked
          to provide certain information about yourself by filling out and
          submitting an online form. It is completely optional for you to engage
          in these activities. If you elect to engage in these activities,
          however, you may be required to provide personal information, such as
          your name, mailing address, e-mail address, and other personal
          identifying information.
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          When you submit personal information, you understand and agree that
          Sarasota Christian Fellowship may transfer, store, and process your
          information in any of the countries in which Sarasota Christian
          Fellowship operates, including without limitation, in the United
          States.
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Sarasota Christian Fellowship collects this information in order to
          record and support your participation in the activities you select.
          Sarasota Christian Fellowship also uses information that you provide
          as part of our effort to keep you informed about upcoming events
          and/or answer questions. Sarasota Christian Fellowship will never sell
          or share your information with other companies.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PrivacyPolicy

