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

const Summary = () => {
  const [depMem, setDepMem] = useState('');
  const [depDetails, setDepDetails] = useState([]);
  const [child, setChild] = useState('');
  const [childDetails, setChildDetails] = useState([]);
  const [state, dispatch] = useContext(UserContext);
  const { user } = state;

  useEffect(() => {
    const storedDepMem = localStorage.getItem('depMem');
    if (storedDepMem) {
      setDepMem(parseInt(storedDepMem));
    }

    const storedChild = localStorage.getItem('child');
    if (storedChild) {
      setChild(parseInt(storedChild));
    }
  }, []);

  const handleDepMemChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setDepMem(parsedValue);
      setDepDetails(Array(parsedValue).fill({}));
      localStorage.setItem('depMem', parsedValue);
      localStorage.setItem('depDetails', Array(parsedValue).fill({}));
      dispatch({ type: 'UPDATE_USER', payload: { ...user, depMem: parsedValue } });
    } else {
      console.log("Enter a valid number");
    }
  };
  
  const handleChildChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setChild(parsedValue);
      setChildDetails(Array(parsedValue).fill({}));
      localStorage.setItem('child', parsedValue);
      dispatch({ type: 'UPDATE_USER', payload: { ...user, child: parsedValue } });
    } else {
      console.log("Enter a valid number");
    }
  };
  
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
        id='noOfDependentMembers'
        label='Number of Dependent Members'
        name='noOfDependentMembers'
        type='number'
        value={depMem}
        onChange={handleDepMemChange}
        variant='outlined'
        margin='normal'
        InputLabelProps={{
            shrink: true
        }}
        required
        fullWidth
        />
    </Grid>
    <Grid item xs={12}>
        <TextField
        id='noOfChild'
        label='Number of Children'
        name='noOfChild'
        type='number'
        value={child}
        onChange={handleChildChange}
        variant='outlined'
        margin='normal'
        InputLabelProps={{
            shrink: true
        }}
        required
        fullWidth
        />
    </Grid>
    </Grid>
  );
};

export default Summary;
