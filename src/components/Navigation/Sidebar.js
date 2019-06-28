import React from "react"
import PropTypes from "prop-types"
import uuidv1 from "uuid"
import { makeStyles } from "@material-ui/styles"
import ImportContacts from "@material-ui/icons/ImportContacts"

import {
  List,
  Link,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core"

const useStyles = makeStyles({
  list: { width: 250, textAlign: "left" },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const SideBar = props => {
  const classes = useStyles()
  const { menuItems } = props
  return (
    <List className={classes.list}>
      {menuItems.map(item => (
        <Link
          key={uuidv1()}
          color="inherit"
          href={item.route}
          className={classes.link}
        >
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      ))}
      <Link
        color="inherit"
        href="https://www.ipibooks.com/"
        className={classes.link}
      >
        <ListItem button>
          <ListItemIcon>
            <ImportContacts />
          </ListItemIcon>
          <ListItemText primary="IPI Books" />
        </ListItem>
      </Link>
    </List>
  )
}

SideBar.propTypes = { classes: PropTypes.object, menuItems: PropTypes.array }

export default SideBar
