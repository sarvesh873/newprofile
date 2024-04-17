import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem } from '@material-ui/core';

export default props => {
  const [depDetails, setDepDetails] = useState([]);

  const handleDepDetailsChange = (index, e) => {
    const { name, value } = e.target;
    setDepDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  return (
    <Grid container spacing={2}>
      {depDetails.map((_, index) => (
        <React.Fragment key={index}>
          <Grid item xs={12}>
            <TextField
              id={`dependentName${index}`}
              label='Name'
              name={`dependentName${index}`}
              value={depDetails[index]?.name || ''}
              onChange={e => handleDepDetailsChange(index, e)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id={`dependentAge${index}`}
              label='Age'
              name={`dependentAge${index}`}
              type='number'
              value={depDetails[index]?.age || ''}
              onChange={e => handleDepDetailsChange(index, e)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              id={`dependentGender${index}`}
              name={`dependentGender${index}`}
              value={depDetails[index]?.gender || ''}
              onChange={e => handleDepDetailsChange(index, e)}
              required
              fullWidth
            >
              <MenuItem value=''>Select Gender</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};
