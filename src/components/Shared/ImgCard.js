import React from "react"
import PropTypes from 'prop-types';
import { Card, CardMedia } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      margin: theme.spacing(2),
    },
  }))

const ImgCard = ({imgSrc}) => {
const classes = useStyles()
  return (
      <Card className={classes.card} raised>
        <CardMedia
          component="img"
          src={imgSrc}
        />
      </Card>
  )
}

ImgCard.propTypes = {
  imgSrc: PropTypes.string,
}

export default ImgCard
