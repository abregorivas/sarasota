import React from "react"
import { makeStyles, createStyles } from "@material-ui/styles"
import forestRoad from "../../images/hero-bg.jpg"

import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      borderRadius: 0,
      boxShadow: "none",
      position: "relative",
    },
    content: {
      color: "white",
      width: "100%",
      position: "absolute",
      top: "35%",
      padding: theme.spacing(8),
      [theme.breakpoints.down("md")]: {
        top: "30%",
      },
      [theme.breakpoints.down("sm")]: {
        top: "25%",
      },
    },
    scripture: {
      fontSize: 38,
      [theme.breakpoints.down("md")]: {
        fontSize: 32,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
      citation: {},
    },
  })
)

const Hero = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={forestRoad} title="forest road" />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="p" className={classes.scripture}>
          And now these three remain:
        </Typography>
        <Typography variant="h5" component="p" className={classes.scripture}>
          Faith, Hope and Love.
        </Typography>
        <Typography variant="h5" component="p" className={classes.scripture}>
          But the greatest of these is Love.
        </Typography>
        <Typography variant="body1" component="p" className={classes.citation}>
          1 Corinthians 13:13
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Hero
