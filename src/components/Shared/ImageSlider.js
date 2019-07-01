import React, { useState } from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { CardMedia } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import Pagination from "../Shared/Pagination"
import uuid from "uuid"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles({
  root: {
    position: "relative",
    flexGrow: 1,
  },
  media: {
    height: "100vh",
    overflow: "hidden",
    width: "100%",
    display: "block",
  },
})

const ImageSlider = ({ images }) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const handleStepChange = step => setActiveStep(step)

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        interval={5000}
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {images.map((img, index) => (
          <div key={uuid()}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardMedia
                className={classes.media}
                component="img"
                image={img}
                title={img.title ? img.title : ""}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        dots={images.length}
        index={activeStep}
        onChangeIndex={handleStepChange}
      />
    </div>
  )
}

export default ImageSlider
