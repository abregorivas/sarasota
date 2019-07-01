import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardContent,
  Typography,
  Button,
  MobileStepper,
} from "@material-ui/core"
// import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import { Document, Page, pdfjs } from "react-pdf"
import { makeStyles, useTheme } from "@material-ui/styles"
// import CircularProgress from "@material-ui/core/CircularProgress"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"


const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    overflow: "auto",
    height: `calc(100vh - 200px)`,
  },
  media: {},
  progress: {
    position: "relative",
    top: 200,
    left: 200,
  },
  root: {
    background: "#eceff1",
  },
})

const PDFViewer = props => {
  const classes = useStyles()
  const { sermon } = props
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div>
      <MobileStepper
        className={classes.root}
        steps={sermon.pdfPages}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === sermon.pdfPages - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Card className={classes.card}>
        <CardContent>

          <Typography>
            {activeStep + 1} of {sermon.pdfPages}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

PDFViewer.propTypes = {
  sermon: PropTypes.object,
}

export default PDFViewer
// <Document
// file={`sermons/pdf/${sermon.fileName}.pdf`}
// renderMode="none"
// loading={
// <CircularProgress disableShrink className={classes.progress} />
// }
// >
// <Page
// pageNumber={activeStep + 1}
// scale={1.3}
// loading="Please Wait"
//   />
//   </Document>


//  <CardActions disableSpacing color="primary">
//         <IconButton aria-label="Add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <Badge className={classes.margin} badgeContent={4} color="primary">
//           <MailIcon />
//         </Badge>
//       </CardActions>
