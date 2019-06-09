import React, { Fragment } from "react"
import RequirementsList from "./RequirementsList"
import Campus from "./Campus"
import SectionHeading from "../Shared/SectionHeading"
import { Grid } from "@material-ui/core"
import { requirements } from "../../API/internship"

const Requirements = () => {
  return (
    <Fragment>
      <Grid container spacing={3} style={{ marginTop: "80px" }}>
        <Grid item xs={12} sm={3}>
          <RequirementsList list={requirements.slice(0, 4)} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequirementsList list={requirements.slice(4, 8)} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequirementsList list={requirements.slice(8, 12)} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequirementsList list={requirements.slice(12, 16)} />
        </Grid>
        <Grid item xs={12}>
          <SectionHeading
            heading="Faith Sharing"
            subHeading="Share your faith at these compuses."
          />
          <Campus />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Requirements
