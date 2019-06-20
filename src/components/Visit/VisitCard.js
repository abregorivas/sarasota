import React from "react"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"

const VisitCard = props => {
  const { img, time, addr1, addr2, children } = props

  return (
    <Card raised>
      {children}
      <CardMedia component="img" image={img} />
      <CardContent>
        <Typography variant="body2" component="p">
          {time}
        </Typography>
        <Typography variant="body2" component="p">
          {addr1}
        </Typography>
        <Typography variant="body2" component="p">
          {addr2}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VisitCard
