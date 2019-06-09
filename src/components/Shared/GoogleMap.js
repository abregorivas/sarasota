import React from "react"
import { Card, CardMedia } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: "none",
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },

    media: {
      width: 600,
      height: 400,
    },
  })
)

const GoogleMap = props => {
  const classes = useStyles()
  const { url } = props
  return (
    <div className={classes.paper}>
      <Card>
        <CardMedia className={classes.media} component="iframe" image={url} />
      </Card>
    </div>
  )
}

export default GoogleMap
