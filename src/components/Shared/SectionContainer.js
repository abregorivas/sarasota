import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      backgroundColor: "transparent",
      borderRadius: 0,
      border: "none",

    }
  })
);

const SectionContainer = props => {
  const classes = useStyles();
  const { id, children } = props;
  return (
    <div id={id} className={classes.root}>
      <Container>{children}</Container>
    </div>
  );
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object
};

export default SectionContainer;
