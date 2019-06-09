import React from "react"
import { List, ListItem, ListItemText, Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      paddingTop: theme.spacing(0.5),
      paddingLeft: 0,
    },
    inline: {
      display: "inline",
      color: "#7D7C7C",
    },
  })
)

const Visit = props => {
  const classes = useStyles()
  return (
    <List>
      <ListItem className={classes.listItem}>
        <ListItemText
          primary="Church Service"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                Sunday 1:30pm
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                3773 Wilkinson Rd
                <br />
                Sarasota, FL 34233
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText
          primary="Bible Study"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Thursday 7:00pm
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                4335 Olive Avenue
                <br />
                Sarasota, FL 34231
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}

export default Visit
