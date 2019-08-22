import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip,
} from '@material-ui/core';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import CloudDownload from '@material-ui/icons/CloudDownload';
import NotInterested from '@material-ui/icons/NotInterested';
import { makeStyles, createStyles } from '@material-ui/styles';
import uuid from 'uuid';

const useStyles = makeStyles(theme =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: '100%',
      backgroundColor: '#eceff1',
      position: 'relative',
      overflow: 'auto',
      height: `calc(100vh - 132px)`,
    },
    root: {
      width: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }),
);

const SermonList = props => {
  const classes = useStyles();
  const { sermons, setSermon, sermon } = props;
  return (
    <List component="nav" className={classes.list}>
      {sermons
        .filter(el => el.show)
        .map(item => (
          <ListItem
            key={uuid()}
            selected={item.fileName === sermon.fileName}
            button
          >
            <IconButton
              edge="start"
              className={classes.icon}
              aria-label="Delete"
              href={`sermons/audio/${item.fileName}.mp3`}
              download
            >
              {item.hasAudio ? (
                <CloudDownload color="primary" download />
              ) : (
                <Tooltip title="No Audio Available">
                  <NotInterested />
                </Tooltip>
              )}
            </IconButton>

            <ListItemText
              primary={item.title}
              onClick={() => setSermon(item)}
              className={classes.root}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                className={classes.icon}
                aria-label="Pdf Notes"
                href={item.hasPdf ? `sermons/pdf/${item.fileName}.pdf` : null}
                download
              >
                {item.hasPdf ? (
                  <PictureAsPdf style={{ color: '#bf360c' }} />
                ) : (
                  <Tooltip title="No PDF Available">
                    <NotInterested />
                  </Tooltip>
                )}
              </IconButton>
            </ListItemSecondaryAction>
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
    pdfPages: PropTypes.number,
  }).isRequired,
};

export default SermonList;
