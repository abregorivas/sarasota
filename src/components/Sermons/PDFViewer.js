// import React, { useState } from "react"
// import PropTypes from "prop-types"
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   MobileStepper,
// } from "@material-ui/core"
// import { pdfjs } from 'react-pdf';
// import { Document, Page } from "react-pdf"
// import { makeStyles, useTheme } from "@material-ui/styles"
// import CircularProgress from "@material-ui/core/CircularProgress"
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
// // import { Document, Page } from 'react-pdf/dist/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//
//
// // import spdf from "simple-react-pdf";
// const useStyles = makeStyles({
//   card: {
//     borderRadius: 0,
//     boxShadow: "none",
//     overflow: "auto",
//     height: `calc(100vh - 200px)`,
//   },
//   media: {},
//   progress: {
//     position: "relative",
//     top: 200,
//     left: 200,
//   },
//   root: {
//     background: "#eceff1",
//   },
//
// })
//
// const PDFViewer = props => {
//   const classes = useStyles()
//   const { sermon } = props
//   const theme = useTheme()
//   const [activeStep, setActiveStep] = useState(0)
//
//   const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
//
//   const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
//
//   // useEffect(() => {
//   //
//   // },[])
//
//   return (
//     <div>
//       <MobileStepper
//         className={classes.root}
//         steps={sermon.pdfPages}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === sermon.pdfPages - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//       <Card className={classes.card}>
//         <CardContent>
//           <Document
//             options ={{cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
//               cMapPacked: true,}}
//             file={`sermons/pdf/${sermon.fileName}.pdf`}
//             loading={
//               <CircularProgress disableShrink className={classes.progress} />
//             }
//           >
//             <Page
//               pageNumber={activeStep + 1}
//               scale={1.3}
//               loading="Please Wait"
//             />
//           </Document>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
//
// PDFViewer.propTypes = {
//   sermon: PropTypes.object,
// }
//
// export default PDFViewer
//



// <Typography>
// {activeStep + 1} of {sermon.pdfPages}
// </Typography>

//  <CardActions disableSpacing color="primary">
//         <IconButton aria-label="Add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <Badge className={classes.margin} badgeContent={4} color="primary">
//           <MailIcon />
//         </Badge>
//       </CardActions>

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

// import samplePDF from './test.pdf';

export default class PDFViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <React.Fragment>
        <Document
          file={`sermons/pdf/${this.props.sermon.fileName}.pdf`}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </React.Fragment>
    );
  }
}
