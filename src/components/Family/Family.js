import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import SectionContainer from "../Shared/SectionContainer"
import SectionHeading from "../Shared/SectionHeading"
import { makeStyles, createStyles } from "@material-ui/styles"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { familyData } from "../../Api/family"
import ImgGallery from "../Shared/ImgGallery"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      height: `calc(100vh - 92px)`,
      backgroundColor: "#FEFEFE",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    button: {
      border: `1px solid #F5B733`,
      backgroundColor: "#FEFEFE",
      fontWeight: "bold",
      borderRadius: 0,
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      "&:hover": {
        backgroundColor: "#F5B733",
      },
    },
    content: {
      maxWidth: 500,
      color: theme.palette.text.secondary,
    },
    familyImg: {
      boxShadow: "none",
      margin: theme.spacing(2),
      backgroundColor: "transparent",
      [theme.breakpoints.down("md")]: {
        maxWidth: 800,
      },
    },
  })
)

const Family = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div className={classes.root}>
      <SectionContainer id="Family">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={`${matches}` === "true" ? "column-reverse" : "row"}
        >
          <Grid container item xs={12} md={6}>
            <SectionHeading headings={["Love Is", "Our Glue"]} />
            <Grid item xs={12} md={11}>
              <Typography className={classes.content} variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                autem, beatae consectetur deserunt excepturi, expedita hic illo
                laudantium libero maiores minima modi mollitia
              </Typography>
              <br />
              <Typography className={classes.content} variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                autem, beatae consectetur deserunt excepturi, expedita hic illo
                laudantium libero maiores minima modi mollitia
              </Typography>
              <br />
              <Button className={classes.button} variant="outlined">
                Read Bios
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6} spacing={1} wrap="wrap">
            <ImgGallery tileData={familyData} />
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default Family
