import React from "react"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"

const VisitCard = props => {
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
