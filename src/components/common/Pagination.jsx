import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import PaginationDot from './PaginationDot';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row'
  }
});

const Pagination = props => {
  const classes = useStyles();
  const { index, dots, onChangeIndex } = props;
  const children = [];
  const handleClick = idx => onChangeIndex(idx);

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === index}
        handleClick={handleClick}
      />
    );
  }
  return <div className={classes.root}>{children}</div>;
};

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired
};

export default Pagination;
