import React, { useState } from "react"
import { Button, List, ListItem, Link } from "@material-ui/core"
import uuidv1 from "uuid"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      paddingTop: theme.spacing(0.5),
      paddingLeft: 0,
    },
    link: {
      color: "#7D7C7C",
      paddingLeft: 0,
    },
    root: {
      fontSize: 10,
    },
  })
)

const Sitemap = props => {
  const classes = useStyles()
  const { toggleModal } = props
  const [listItems] = useState([
    "Mission",
    "Services",
    "Sermons",
    "Internship",
    "Contact",
  ])
  return (
    <List component="nav">
      {listItems.map(item => (
        <ListItem key={uuidv1()} className={classes.listItem}>
          <Link href={`#${item}`} variant="body2" className={classes.link}>
            {item}
          </Link>
        </ListItem>
      ))}
      <ListItem className={classes.listItem} onClick={toggleModal}>
        <Button size="small" className={classes.root} color="secondary">
          Privacy Policy
        </Button>
      </ListItem>
    </List>
  )
}

export default Sitemap
