import React from "react"
import PropTypes from "prop-types"
import uuidv1 from "uuid"
import { Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

/*
Current not using gatsby Link as there is no routing to other pages
 */

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: theme.spacing(1),
    flexShrink: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
    "&:hover": { backgroundColor: "none" },
  },
  link: {
    display: "flex",
    textTransform: "uppercase",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: "#333",
    "&:hover": {
      textDecoration: "none",
      border: `1px solid #ffa000`,
      borderRadius: "4px",
    },
  },
}))

const Menu = props => {
  const { menuItems } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {menuItems.map(item => (
        <Link
          key={uuidv1()}
          className={classes.link}
          component="a"
          variant="button"
          to={item.external ? null : item.route}
          href={item.route}
          target={item.external ? "_blank" : null}
          rel={item.external ? "noopener" : null}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

Menu.propTypes = { menuItems: PropTypes.array }

export default Menu
