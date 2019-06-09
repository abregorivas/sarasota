import React from "react"
import { Card, Grid, CardMedia } from "@material-ui/core"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import uuidv1 from "uuid"
import { familyData } from "../../Api/family"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      maxHeight: 285,
      height: "auto",
      margin: `0 auto`,
      [theme.breakpoints.down("xs")]: {
        maxHeight: 285,
        minHeight: 285,
      },
      media: {},
    },
    subcontent: {
      maxWidth: 400,
      margin: `0 auto`,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(8),
    },
  })
)

const Family = () => {
  const classes = useStyles()
  return (
    <SectionContainer id="Family">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <SectionHeading
              heading="Love is our Glue"
              subHeading="At Sarasota Christian Fellowship, family is an integral part of our daily life. Come join our family!"
            />
          </Grid>
          <Grid item xs={12} sm={7} />
          {familyData.map(tile => (
            <Grid key={uuidv1()} item xs={12} sm={4}>
              <Card className={classes.card} raised>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={tile.img}
                  title={tile.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </SectionContainer>
  )
}

export default Family
