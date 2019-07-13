import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}))

const ImageGallery = ({ tileData }) => {
  const classes = useStyles()
  const theme = useTheme()
  const breakPointSm = useMediaQuery(theme.breakpoints.down("sm"))
  const breakPointXs = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={156}
        className={classes.gridList}
        cols={breakPointXs ? 2 : breakPointSm ? 3 : 2}
      >
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span> {tile.content ? `${tile.content}` : null}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default ImageGallery
