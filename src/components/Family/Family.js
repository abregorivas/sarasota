import React from "react"
import { Card, Grid, CardMedia, Typography } from "@material-ui/core"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import { makeStyles, createStyles } from "@material-ui/styles"
import family1 from '../../images/Family1.png'
import family2 from '../../images/Family2.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContentCard from '../Shared/ContentCard'


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
    familyImg: {
      boxShadow: 'none',
      margin: theme.spacing(2),
      backgroundColor: 'transparent',
      [theme.breakpoints.down("md")]: {
        maxWidth: 800
    }
    }
  })
)

const Family = () => {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionContainer id="Family">
      <div className={classes.root}>
        <Grid container spacing={4} alignItems="center" direction={`${matches}` === 'true' ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            <SectionHeading
              heading="Family"
              subHeading="Love is our glue"
            />
            <ContentCard>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem, beatae consectetur deserunt excepturi, expedita hic illo laudantium libero maiores minima modi mollitia nemo nihil placeat repudiandae tenetur vero voluptas?
            </Typography>
            </ContentCard>
          </Grid>
          <Grid item xs={12} md={6}>
          <Card className={classes.familyImg} >
            <CardMedia
              className={classes.media}
              component="img"
              src={`${matches}` === 'true' ? family2 : family1}
            />
          </Card>
          </Grid>
        </Grid>
      </div>
    </SectionContainer>
  )
}

export default Family
