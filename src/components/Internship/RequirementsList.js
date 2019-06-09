import React from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"
import uuidv1 from "uuid"

const RequirementsList = props => {
  const { list } = props
  return (
    <List dense>
      {list.map(item => (
        <ListItem key={uuidv1()}>
          <ListItemText primary={item.heading} secondary={item.message} />
        </ListItem>
      ))}
    </List>
  )
}

export default RequirementsList
