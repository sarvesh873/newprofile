import React from "react";
import { Grid, TextField } from "@material-ui/core";

export default props => {
  return (
    <div>
      <h2>Goal Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="goalAmount"
            label="Goal Amount"
            name="goalAmount"
            type="number"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="goalDuration"
            label="Goal Duration (in months/ years, please specify)"
            name="goalDuration"
            type="number"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

