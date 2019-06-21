import React from "react"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import Requirements from "./Requirements"
import intershipImg from "../../images/Internship.jpeg"
import DialogContainer from "../Shared/DialogContainer"
import {  Grid, Button, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"
import ImgCard from '../Shared/ImgCard'
import ContentCard from "../Shared/ContentCard"
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      marginLeft: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
  })
)

const Internship = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <SectionContainer id="internship">
        <Grid container spacing={6}
              alignItems="center"
              direction={`${matches}` === 'true' ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={6} >
            <SectionHeading heading="Internship" />
            <ContentCard>
            <Typography
              className={classes.text}
              gutterBottom
              variant="body2"
              component="p"
            >
              The goal of this internship program is to train a young man in the
              fundamentals of ministry&#44; and give him a realistic perspective
              &#40;expectations&#44; spiritual preparedness&#44; and
              relationships&#41; on a minister&#39;s personal life&#46; An intern
              should be prepared to deepen their knowledge and application of
              scripture in both academic and practical settings&#46;
            </Typography>
            </ContentCard>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickOpen}
              color="primary"
            >
              View Requirements
            </Button>

            <DialogContainer
              title="Intership Requirements"
              open={open}
              handleClose={() => handleClose()}
            >
              <Requirements />
            </DialogContainer>
          </Grid>
          <Grid item xs={12} md={6} >
            <ImgCard imgSrc={intershipImg} />
          </Grid>

        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Internship
