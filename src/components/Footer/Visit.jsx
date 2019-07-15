import React from 'react';
import { List } from '@material-ui/core';

import Event from './Event'

const Visit = () => {
  return (
    <List component="ul">
      <Event
        name="Church Service"
        dateTime="Sunday 1:30pm"
        addr1="3773 Wilkinson Rd"
        addr2="Sarasota, FL 34233"
      />

      <Event
        name="Bible Study"
        dateTime="Thursday 7:00pm"
        addr1="4335 Olive Avenue"
        addr2="Sarasota, FL 34231"
      />
    </List>
  );
};

export default Visit;
