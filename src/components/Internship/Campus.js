import React from "react"
import { Card, CardMedia, Grid } from "@material-ui/core"
import { campusInfo } from "../../API/campus"
import uuidv1 from "uuid"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    card: { boxShadow: "none", height: 100 },
    media: {},
  })
)

const Campus = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {campusInfo.map(item => (
          <Grid key={uuidv1()} item xs={6} sm={3} md={2}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={item.img}
                />
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Campus
