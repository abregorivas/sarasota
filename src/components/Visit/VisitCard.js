import React from "react"
import { makeStyles, createStyles } from "@material-ui/styles"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      height: "auto",
      margin: `0 auto`,
    },
  })
)

const VisitCard = props => {
  const classes = useStyles()
  const { img, time, addr1, addr2, children } = props

  return (
    <Card className={classes.card} raised>
      {children}
      <CardMedia component="img" image={img} />
      <CardContent>
        <Typography className={classes.content} variant="body2" component="p">
          {time}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {addr1}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {addr2}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VisitCard
