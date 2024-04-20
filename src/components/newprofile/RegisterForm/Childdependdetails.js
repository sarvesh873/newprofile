import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import axios from "axios"; // Import Axios for HTTP requests

const useStyles = makeStyles(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2)
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  }
}));

const Childdependdetails = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(UserContext);
  const [numOfChildrensDep, setNumOfChildrensDep] = useState(() => {
    const storedNumOfChildrensDep = localStorage.getItem('numOfChildrensDep');
    return storedNumOfChildrensDep !== null ? parseInt(storedNumOfChildrensDep) : '';
  });
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const [childrensDepDetails, setChildrensDepDetails] = useState(() => {
    const storedChildrensDepDetails = localStorage.getItem('childrensDepDetails');
    return storedChildrensDepDetails !== null ? JSON.parse(storedChildrensDepDetails) : [];
  });
  const [gender, setGender] = useState('');
  const { user } = state;

  // Load data from local storage on component mount
  useEffect(() => {
    const storedNumOfChildrensDep = localStorage.getItem('numOfChildrensDep');
    if (storedNumOfChildrensDep !== null && !user.numOfChildrensDep) {
      setNumOfChildrensDep(parseInt(storedNumOfChildrensDep));
    }
    
    const storedChildrensDepDetails = localStorage.getItem('childrensDepDetails');
    if (storedChildrensDepDetails && !user.childrensDepDetails) {
      setChildrensDepDetails(JSON.parse(storedChildrensDepDetails));
    }

  }, []);

  // Update local storage whenever childrensDepDetails or numOfChildrensDep change
  useEffect(() => {
    localStorage.setItem('childrensDepDetails', JSON.stringify(childrensDepDetails));
    localStorage.setItem('numOfChildrensDep', numOfChildrensDep);
  }, [childrensDepDetails, numOfChildrensDep]);

  const handleNumOfChildrensDepChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setNumOfChildrensDep(parsedValue);
      setChildrensDepDetails(Array(parsedValue).fill({ name: '', age: '', gender: '', eduExpenditure: '' }));
      dispatch({ type: 'UPDATE_USER', payload: { ...user, numOfChildrensDep: parsedValue, childrensDepDetails: Array(parsedValue).fill({ name: '', age: '', gender: '', eduExpenditure: '' }) } });
    } else {
      console.log("Enter a valid number");
    }
  };

  const handleInputChange = (index, field, value) => {
    setChildrensDepDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [field]: value
      };
      return updatedDetails;
    });
  };

  const handleNext = () => {
    setCurrentChildIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentChildIndex(prevIndex => prevIndex - 1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id='numOfChildrensDep'
          label='Number of Childrens Dependents'
          name='numOfChildrensDep'
          type='number'
          value={numOfChildrensDep}
          onChange={handleNumOfChildrensDepChange}
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          required
          fullWidth
        />
      </Grid>
      {childrensDepDetails.map((dep, index) => (
        <div key={index} style={{ display: index === currentChildIndex ? 'block' : 'none' }}>
          <Grid item xs={12}>
            <TextField
              id={`childName${index}`}
              label='Name'
              name={`childName${index}`}
              value={dep.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id={`childAge${index}`}
              label='Age'
              name={`childAge${index}`}
              type='number'
              value={dep.age}
              onChange={(e) => handleInputChange(index, 'age', e.target.value)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel id={`gender-label-${index}`}>Gender</InputLabel>
              <Select
                labelId={`gender-label-${index}`}
                id={`gender-select-${index}`}
                value={dep.gender || gender} // Use dep.gender if set, otherwise fall back to the global gender state
                label="Gender"
                onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              >
                <MenuItem value="">
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id={`childEduExpenditure${index}`}
              label='Education Expenditure'
              name={`childEduExpenditure${index}`}
              type='number'
              value={dep.eduExpenditure}
              onChange={(e) => handleInputChange(index, 'eduExpenditure', e.target.value)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
        </div>
      ))}
      <Grid item xs={12} className={classes.buttonContainer}>
        {currentChildIndex > 0 && (
          <Button variant="contained" color="primary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {currentChildIndex < numOfChildrensDep - 1 && (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        
      </Grid>
    </Grid>
  );
};

export default Childdependdetails;
