import React from "react"
import { makeStyles } from "@material-ui/styles"
import ImageSlider from "../Shared/ImageSlider"
import forestRoad from "../../images/heroe/forestroad.jpg"
import lighthouse from "../../images/heroe/lighthouse.jpg"
import { Card, CardContent, Button } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import BlockQuote from "../Shared/BlockQuote"

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    boxShadow: "none",
    height: "100vh",
    backgroundColor: "#303D4D",
    position: "relative",
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    paddingLeft: theme.spacing(4),
    transform: `translate(-50%, -50%)`,
    textAlign: "left",
    color: "white",
    opacity: "50%",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
      )`,
    width: "45%",
    top: `57%`,
    left: "22%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      left: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      left: "50%",
    },
  },
  heading: {
    textTransform: "uppercase",
    color: "white",
  },
  button: {
    marginTop: theme.spacing(4),
    width: 200,
    color: "black",
    backgroundColor: "#ffa000",
    borderColor: "#ffa000",
    "&:hover": {
      borderColor: "white",
      color: "white",
    },
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <Card className={classes.card}>
        <ImageSlider
          images={[lighthouse, forestRoad, lighthouse, forestRoad]}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h2"
            gutterBottom={true}
            className={classes.heading}
          >
            Sarasota
          </Typography>
          <Typography variant="h4" gutterBottom={true}>
            Christian Fellowship
          </Typography>
          <BlockQuote
            invert="true"
            cite="1 Corinthians 13:13"
            quote={`And now these three remain; Faith, Hope and Love. But the greatest of these is Love.`}
          />
          <Button variant="outlined" className={classes.button}>
            Join us
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
export default Hero
