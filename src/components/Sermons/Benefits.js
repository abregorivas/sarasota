import React from "react"
import { makeStyles } from "@material-ui/styles"
import HeadSetIcon from '@material-ui/icons/HeadsetMic';
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { ListItem, ListItemText, ListItemAvatar, Avatar} from "@material-ui/core"
import classNames from 'classnames';

const useStyles = makeStyles ({
  avatar: {
    margin: 10,
  },
  avatarHeadSet: {
    backgroundColor: '#e67e22'
  },
  avatarHeart: {
    backgroundColor: '#c0392b'
  },
  avatarCloud: {
    backgroundColor: '#03a678'
  },
})


const Benefits = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ListItem component="li">
        <ListItemAvatar>
          <!--suppress RequiredAttributes -->
          <Avatar className={classNames(classes.avatar, classes.avatarHeadSet)}> <HeadSetIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText> Listen </ListItemText>
      </ListItem>
      <!--suppress RequiredAttributes -->
      <ListItem>
        <ListItemAvatar >
          <!--suppress RequiredAttributes -->
          <Avatar className={classNames(classes.avatar, classes.avatarHeart)} > <FavoriteIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText> Love </ListItemText>
      </ListItem>
      <!--suppress RequiredAttributes -->
      <ListItem>
        <ListItemAvatar>
          <!--suppress RequiredAttributes -->
          <Avatar className={classNames(classes.avatar, classes.avatarCloud)}> <CloudDownloadIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText> Download </ListItemText>
      </ListItem>
    </React.Fragment>
  )
}


export default Benefits
