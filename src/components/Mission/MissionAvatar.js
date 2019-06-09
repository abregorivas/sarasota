import React from "react"
import PropTypes from "prop-types"

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"

const MissionAvatar = props => {
  const { text, monogram, color, scripture } = props
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: color }}>{monogram}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={text} secondary={scripture} />
      </ListItem>
    </List>
  )
}

MissionAvatar.propTypes = {
  text: PropTypes.string,
  monogram: PropTypes.string,
  color: PropTypes.string,
  scripture: PropTypes.string,
  tip: PropTypes.string,
}

export default MissionAvatar
