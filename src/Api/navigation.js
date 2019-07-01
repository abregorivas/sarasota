import React from "react"
import MailIcon from "@material-ui/icons/Mail"
import KeyboardVoice from "@material-ui/icons/KeyboardVoice"
import BusinessCenter from "@material-ui/icons/BusinessCenter"
import Place from "@material-ui/icons/Place"
import Star from "@material-ui/icons/Star"
import LocationCity from "@material-ui/icons/LocationCity"

export const MainNavRoutes = [
  { route: "#mission", label: "Mission", external: false, icon: <Star /> },
  {
    route: "#sermons",
    label: "Sermons",
    external: false,
    icon: <KeyboardVoice />,
  },
  { route: "#visit", label: "Visit", external: false, icon: <Place /> },
  {
    route: "#internship",
    label: "Internship",
    external: false,
    icon: <BusinessCenter />,
  },
  { route: "#contact", label: "Contact", external: false, icon: <MailIcon /> },
  {
    route: "https://www.scgov.net/home",
    label: "Sarasota",
    external: true,
    icon: <LocationCity />,
  },
]
