import React, { useState } from "react"
import bibleStudy from "../../images/BibleStudy.jpg"
import bibleReading from "../../images/BibleReading.jpeg"
import peopleGathered from "../../images/peopleGathered.jpg"
import Place from "@material-ui/icons/Place"
import Email from "@material-ui/icons/Email"
import VisitCard from "./VisitCard"
import GoogleMap from "../Shared/GoogleMap"
import { visitusApi } from "../../API/visitus"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import { makeStyles, createStyles } from "@material-ui/styles"
import { CardHeader, Grid, Modal, IconButton } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    title: {
      fontSize: "12px",
    },
  })
)

const Visit = props => {
  const classes = useStyles()
  const [status, setStatus] = useState(false)
  const [map, setMap] = useState("")

  const handleOpen = x => {
    setStatus(true)
    setMap(x)
  }

  const handleClose = status => {
    setStatus(status)
    setMap("")
  }

  return (
    <SectionContainer id="visit">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={status}
        onClose={() => handleClose(false)}
      >
        <GoogleMap url={map} />
      </Modal>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SectionHeading
            heading="Services"
            subHeading="Come visit us and join the family of believers."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <VisitCard
            img={peopleGathered}
            time={visitusApi.churchService.time}
            addr1={visitusApi.churchService.addr1}
            addr2={visitusApi.churchService.addr2}
          >
            <CardHeader
              className={classes.title}
              title={visitusApi.churchService.title}
              subheader={visitusApi.churchService.venue}
              action={
                <IconButton
                  onClick={() => handleOpen(visitusApi.churchService.mapUrl)}
                >
                  <Place />
                </IconButton>
              }
            />
          </VisitCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <VisitCard
            img={bibleStudy}
            time={visitusApi.bibleStudy.time}
            addr1={visitusApi.bibleStudy.addr1}
            addr2={visitusApi.bibleStudy.addr2}
          >
            <CardHeader
              title={visitusApi.bibleStudy.title}
              subheader={visitusApi.bibleStudy.venue}
              action={
                <IconButton
                  onClick={() => {
                    handleOpen(visitusApi.bibleStudy.mapUrl)
                  }}
                >
                  <Place />
                </IconButton>
              }
            />
          </VisitCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <VisitCard
            img={bibleReading}
            time="Set an appointment"
            addr1="Come visit us"
            addr2="Send us an Email "
          >
            <CardHeader
              title="One on One"
              subheader="Spiritual Guidance"
              action={
                <IconButton href="#contact">
                  <Email />
                </IconButton>
              }
            />
          </VisitCard>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

export default Visit
