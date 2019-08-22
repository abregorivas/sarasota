import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import uuid from 'uuid';
import { Grid, Modal, DialogContent } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import VisitCard from './VisitCard';
import GoogleMap from '../common/GoogleMap';
import visitApi from '../../api/visitApi';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
}));

const Visit = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const [map, setMap] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = mapUrl => {
    if (mapUrl) {
      setMap(mapUrl);
      setStatus(true);
    }
  };

  return (
    <div className={classes.root} id="visit">
      <SectionContainer>
        <Modal
          aria-labelledby="googlemap"
          aria-describedby="googlemap directions"
          open={status}
          onClose={() => setStatus(false)}
        >
          <DialogContent>
            <GoogleMap url={map} />
          </DialogContent>
        </Modal>

        <Grid container spacing={matches ? 2 : 4}>
          <Grid item xs={12}>
            <SectionHeading headings={['Come Visit Us']} />
          </Grid>
          {visitApi.map(item => (
            <Grid item xs={12} sm={4} key={uuid()}>
              <VisitCard
                handleAction={() => handleOpen(item.mapUrl)}
                actionLabel="View Map"
                cardInfo={item}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </div>
  );
};

export default Visit;
