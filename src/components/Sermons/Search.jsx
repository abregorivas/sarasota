import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardHeader, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import escapeRegExp from 'escape-string-regexp';
import { makeStyles } from '@material-ui/styles';
import AudioPlayer from 'react-h5-audio-player';
import SearchBar from './SearchBar';
import SermonList from './SermonList';
import PDFViewer from './PDFViewer';
import PDFMenu from './PDFMenu';
import sermonList from '../../api/sermons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nowPlaying: {
    flexGrow: 1,
    display: 'block',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#214146',
    color: 'white',
  },
  list: {
    width: '100%',
    backgroundColor: '#eceff1',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 440,
  },
  togglePlayButton: {
    // Remember to use !important to overwrite inline styles.
    backgroundColor: `green !important`,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  card: {
    borderRadius: 0,
    boxShadow: 'none',
  },
  cardHeader: {
    marginTop: theme.spacing(2),
  },
  progress: {
    position: 'relative',
    top: 200,
    left: 200,
  },
  container: {
    marginTop: 64,
    backgroundColor: '#eceff1',
  },
  pdfContainer: {
    backgroundColor: '#eceff1',
  },
}));

const Search = ({ handleClose }) => {
  const classes = useStyles();
  const [sermons, setSermons] = useState(sermonList);
  const [sermon, setSermon] = useState(sermonList[0]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const filterSearch = searchValue => {
    const match = new RegExp(escapeRegExp(searchValue), 'i');
    const newList = sermonList.reduce((prev, cur) => {
      const newVal = Object.assign({}, cur, {
        show: match.test(cur.title),
      });
      prev.push(newVal);
      return prev;
    }, []);

    setSermons(newList);
  };

  return (
    <div className={classes.root}>
      <SearchBar handleClose={handleClose} filterSearch={filterSearch} />
      <Grid
        container
        className={classes.container}
        direction={`${matches}` === 'true' ? 'column-reverse' : 'row'}
      >
        <Grid item xs={12} md={5}>
          <AudioPlayer src={`sermons/audio/${sermon.fileName}.mp3`} />
          <SermonList sermons={sermons} sermon={sermon} setSermon={setSermon} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container item>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {sermon.author && sermon.author[0].toUpperCase()}
                    </Avatar>
                  }
                  action={<PDFMenu sermon={sermon} />}
                  title={sermon.title ? sermon.title : 'No sermon selected'}
                  subheader={
                    sermon
                      ? `${sermon.author} ${sermon.date}`
                      : 'Select a sermon from the list'
                  }
                />
              </Card>
              {sermon.hasPdf ? <PDFViewer sermon={sermon} /> : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Search.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Search;
