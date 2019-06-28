import React from "react"
import PropTypes from "prop-types"
import csx from "classNames"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: 18,
    width: 18,
    cursor: "pointer",
    border: 0,
    background: "none",
    padding: 0,
    outline: "none",
  },
  dot: {
    backgroundColor: "#e4e6e7",
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3,
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const PaginationDot = ({ index, active, handleClick }) => {
  const classes = useStyles()
  let activeDot = csx(classes.dot, classes.active)
  return (
    <button
      type="button"
      className={classes.root}
      onClick={() => handleClick(index)}
    >
      <div className={active ? activeDot : classes.dot} />
    </button>
  )
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default PaginationDot
