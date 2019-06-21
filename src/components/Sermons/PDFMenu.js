import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton, Button } from "@material-ui/core"
import PictureAsPdf from "@material-ui/icons/PictureAsPdf"
import CloudDownload from "@material-ui/icons/CloudDownload"


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2)
  }
}))

export default function PDFMenu({sermon}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Downloads
      </Button>
      <StyledMenu
        id="pdf-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <IconButton
            className={classes.button}
            aria-label="pdf"
           href={`sermons/pdf/${sermon.fileName}.pdf`}
            download>
            <PictureAsPdf />
          </IconButton>
          <ListItemText primary="Sermon Notes" />
        </StyledMenuItem>
        <StyledMenuItem>
          <IconButton
            className={classes.button}
            href={`sermons/audio/${sermon.fileName}.mp3`}
            download>
            <CloudDownload />
          </IconButton>
          <ListItemText primary="Audio File" />
        </StyledMenuItem>
      </StyledMenu>
    </React.Fragment>
  );
}



//
// <Button
//   aria-controls="customized-menu"
//   aria-haspopup="true"
//   variant="contained"
//   color="primary"
//   onClick={handleClick}
// >
//   Open Menu
// </Button>