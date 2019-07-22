import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, IconButton, ListItemText } from '@material-ui/core';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { makeStyles, createStyles } from '@material-ui/styles';
import uuid from 'uuid';

const useStyles = makeStyles(theme =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: 'none',

      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    list: {
      width: '100%',
      backgroundColor: '#eceff1',
      position: 'relative',
      overflow: 'auto',
      height: `calc(100vh - 132px)`,
      padding: 0
    },
    // may want to pull this out to separate style to reuse root
    root: {
      width: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    input: {
      display: 'none'
    }
  })
);

const SermonList = props => {
  const classes = useStyles();
  const { sermons, setSermon, sermon } = props;
  return (
    <List component="nav" dense className={classes.list}>
      {sermons
        .filter(el => el.show)
        .map(item => (
          <ListItem
            button
            key={uuid()}
            selected={item.fileName === sermon.fileName}
          >
            <IconButton
              edge="start"
              className={classes.icon}
              aria-label="Delete"
              href={`sermons/audio/${item.fileName}.mp3`}
              download
            >
              <CloudDownload color="primary" download />
            </IconButton>

            <IconButton
              edge="start"
              className={classes.icon}
              aria-label="Pdf Notes"
              href={`sermons/pdf/${item.fileName}.pdf`}
              download
            >
              <PictureAsPdf style={{ color: '#bf360c' }} />
            </IconButton>

            <ListItemText
              primary={item.title}
              onClick={() => setSermon(item)}
              className={classes.root}
            />
          </ListItem>
        ))}
    </List>
  );
};

SermonList.propTypes = {
  sermons: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSermon: PropTypes.func.isRequired,
  sermon: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    fileName: PropTypes.string,
    hasPdf: PropTypes.bool,
    pdfPages: PropTypes.number
  }).isRequired
};

export default SermonList;