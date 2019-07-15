import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import uuid from 'uuid';
import { Grid, Modal } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import VisitCard from './VisitCard';
import GoogleMap from '../common/GoogleMap';
import { visitApi } from '../../Api/visitApi';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  modalCard: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  modalMedia: {
    width: 600,
    height: 400,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 360,
      maxHeight: 260
    }
  }
}));

const Visit = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const [map, setMap] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const handleOpen = x => {
    if (x) {
      setStatus(true);
      setMap(x);
    }
  };

  const handleClose = status => {
    setStatus(status);
    setMap('');
  };

  return (
    <div className={classes.root} id="visit">
      <SectionContainer>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={status}
          onClose={() => handleClose(false)}
        >
          <GoogleMap url={map} classes={classes} />
        </Modal>

        <Grid container spacing={matches ? 2 : 4}>
          <Grid item xs={12}>
            <SectionHeading headings={['Come Visit Us']} />
          </Grid>
          {visitApi.map(item => (
            <Grid item xs={12} sm={4} key={uuid()}>
              <VisitCard
                img={item.imgSrc}
                time={item.time}
                addr1={item.addr1}
                addr2={item.addr2}
                handleAction={() => handleOpen(item.mapUrl)}
                actionLabel="View Map"
                title={item.title}
                subtitle={item.venue}
                href={item.href}
                fabIcon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Visit;
