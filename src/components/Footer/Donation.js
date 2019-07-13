import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"
import donationLogo from '../../images/DonationLogo.png'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: "#7D7C7C",
    },
    form: {
      paddingTop: theme.spacing(2),
    },
  })
)

const Donation = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="body2">
        If you would like to make a contribution to this ministry, click donate
        button.
      </Typography>
      <br />
      <form
        className={classes.form}
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="VMTY5YGFNPCRS" />
        <input
          style={{ width: "80%" }}
          type="image"
          // src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          src={donationLogo}
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  )
}

export default Donation
