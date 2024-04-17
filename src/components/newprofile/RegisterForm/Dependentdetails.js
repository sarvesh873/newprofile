import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2)
  }
}));

export default props => {
  const [state, setState] = useContext(UserContext);
  const depMem  = localStorage.getItem('depMem');// Assuming depMem contains the count of dependent members
  console.log(depMem)
  const depDetails= JSON.parse(localStorage.getItem('depDetails'));
  console.log(depDetails)
  const [newDepDetails, setNewDepDetails] = useState([]);

  useEffect(() => {
    // Initialize newDepDetails based on existing depDetails
    setNewDepDetails(depDetails);
  }, [depDetails]);

  const handleDepDetailsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDetails = [...newDepDetails];
    updatedDetails[index] = { ...updatedDetails[index], [name]: value };
    setNewDepDetails(updatedDetails);
    setState({ ...state, depDetails: updatedDetails });
  };

  // Generate input fields dynamically based on depMem
  const dependentInputs = [];
  for (let i = 0; i < depMem; i++) {
    dependentInputs.push(
      <Grid container spacing={2} key={i}>
        <Grid item xs={12}>
          <TextField
            id={`dependentName${i}`}
            label='Name'
            name={`dependentName${i}`}
            value={newDepDetails[i]?.name || ""}
            onChange={(e) => handleDepDetailsChange(i, e)}
            required
            variant='outlined'
            margin='normal'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`dependentAge${i}`}
            label='Age'
            name={`dependentAge${i}`}
            type='number'
            value={newDepDetails[i]?.age || ""}
            onChange={(e) => handleDepDetailsChange(i, e)}
            required
            variant='outlined'
            margin='normal'
            fullWidth
          />
        </Grid>
        {/* Add other fields here */}
      </Grid>
    );
  }

  return <div>{dependentInputs}</div>;
};

