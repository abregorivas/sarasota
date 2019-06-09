import React from "react"
import PropTypes from "prop-types"
import uuidv1 from "uuid"
import { makeStyles } from "@material-ui/styles"

import { List, Link, ListItem, ListItemText } from "@material-ui/core"

const useStyles = makeStyles({
  list: { width: 250, textAlign: "left" },
})

const SideBar = props => {
  const classes = useStyles()
  const { menuItems } = props
  return (
    <List className={classes.list}>
      {menuItems.map(item => (
        <Link key={uuidv1()} color="inherit" href={item.route}>
          <ListItem button>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

SideBar.propTypes = { classes: PropTypes.object, menuItems: PropTypes.array }

export default SideBar
