import React, { useContext } from "react";
import { UserContext } from "./UserContext";

//GENERAL
import { TextField, Grid } from "@material-ui/core";

//USER PREFERENCES
export default props => {
  const [state] = useContext(UserContext);
  const { user } = state;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id='location'
          label='Employment Location'
          value={user.location}
          name='location'
          placeholder='where you are Located'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 10
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='profession'
          label='Your Profession'
          name='profession'
          value={user.profession}
          placeholder='Your Profession'
          helperText='Service Or Self Employeed'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='salary'
          label='Your Salary'
          name='salary'
          value={user.salary}
          placeholder='Your Salary'
          helperText='Your monthly salary'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
