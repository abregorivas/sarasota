import React, { Fragment } from "react"
import { Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    text: {
      color: "#2e3131",
    },
  })
)

const JobDescription = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <Typography
        className={classes.text}
        gutterBottom
        variant="body2"
        component="p"
      >
        The goal of this internship program is to train a young man in the
        fundamentals of ministry&#44; and give him a realistic perspective
        &#40;expectations&#44; spiritual preparedness&#44; and
        relationships&#41; on a minister&#39;s personal life&#46; An intern
        should be prepared to deepen their knowledge and application of
        scripture in both academic and practical settings&#46;
      </Typography>
      <Typography
        className={classes.text}
        gutterBottom
        variant="body2"
        component="p"
      >
        This position is not for someone looking for a casual summer vacation to
        beautiful Sarasota. On the contrary, an intern should be prepared to
        work hard in helping to build a formidable church in Sarasota.
      </Typography>

      <Typography className={classes.text} variant="body2" component="p">
        Daily activities will include having at least a 1-2 hour quiet time;
        daily sharing your faith; having breakfast, lunch and/or dinner
        appointments with non-Christian; and setting up Bible studies with young
        men in the Sarasota community.
      </Typography>
    </Fragment>
  )
}

export default JobDescription
