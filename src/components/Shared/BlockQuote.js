import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    quote: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      color: theme.palette.text.secondary,
    },
  })
)

const BlockQuote = props => {
  const classes = useStyles()
  let { quote } = props
  return (
    <Typography
      className={classes.quote}
      gutterBottom
      variant="body2"
      color="secondary"
      component="blockquote"
    >
      <em>{quote}</em>
    </Typography>
  )
}

BlockQuote.propTypes = {
  quote: PropTypes.string,
  classes: PropTypes.object,
}

export default BlockQuote
