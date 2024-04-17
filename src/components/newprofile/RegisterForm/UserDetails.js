import React, { useContext , useState ,useEffect  } from "react";
//GENERAL
import { TextField, Grid } from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
//CONTEXT
import { UserContext } from "./UserContext";

export default props => {
  const [state] = useContext(UserContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
  const [gender, setGender] = useState('');
  useEffect(() => {
    const storedGender = localStorage.getItem('gender');
    if (storedGender) {
      setGender(storedGender);
    }
  }, []); // Empty dependency array ensures this effect only runs once

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    localStorage.setItem('gender', selectedGender);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your username here'
          name='username'
          label='Username'
          value={user.username}
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          error={!!errors["username"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth required error={!!errors["gender"]}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
              InputLabelProps={{
                shrink: true
              }}
            >
              <MenuItem value="">
                <em>Select your Gender</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {errors["gender"] && <FormHelperText>{errors["gender"]}</FormHelperText>}
          </FormControl>
        </Grid>

      <Grid item xs={12}>
        <TextField
          type='date'
          name='birthdate'
          id='birthdate'
          label='Birthdate'
          defaultValue={user.birthdate}
          helperText='You need to be at least 18 years old'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10)
          }}
          error={!!errors["birthdate"]}
          required
          fullWidth={isWidthDown("sm")}
        />
      </Grid>

      
    </Grid>
  );
};
