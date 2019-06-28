import React from "react"
import PropTypes from "prop-types"
import { Typography, Link } from "@material-ui/core"
import logo from "../../images/scf-logo-lg.png"
import { makeStyles, createStyles } from "@material-ui/styles"
import { Link as GatsbyLink } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    brand: {
      display: "flex",
      justifyContent: "space-between",
      flexShrink: 0,
    },
    brandText: {
      paddingLeft: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    caption: {
      fontFamily: `'Raleway', 'sans-serif'`,
      color: theme.palette.text.secondary,
    },
    logo: {
      height: 80,
      width: 80,
    },
  })
)

const Brand = () => {
  const classes = useStyles()
  return (
    <div className={classes.brand}>
      <Link to="/" component={GatsbyLink}>
        <img src={logo} alt="" className={classes.logo} />
      </Link>
      <div className={classes.brandText}>
        <Typography variant="body2" className={classes.caption}>
          Faith does not make things easy;
        </Typography>
        <Typography variant="body2" className={classes.caption}>
          It makes things possible.
        </Typography>
        <Typography variant="body2" className={classes.caption}>
          Luke 1:37
        </Typography>
      </div>
    </div>
  )
}

Brand.propTypes = { classes: PropTypes.object }

export default Brand
