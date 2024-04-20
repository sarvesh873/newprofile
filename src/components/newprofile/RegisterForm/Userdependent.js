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

const Summary = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(UserContext);
  const [depMem, setDepMem] = useState(() => {
    const storedDepMem = localStorage.getItem('depMem');
    return storedDepMem !== null ? parseInt(storedDepMem) : '';
  });
  const [currentDepIndex, setCurrentDepIndex] = useState(0);
  const [depDetails, setDepDetails] = useState(() => {
    const storedDepDetails = localStorage.getItem('depDetails');
    return storedDepDetails !== null ? JSON.parse(storedDepDetails) : [];
  });
  const [gender, setGender] = useState('');
  const { user } = state;

  // Load data from local storage on component mount
  useEffect(() => {
    const storedDepMem = localStorage.getItem('depMem');
    if (storedDepMem !== null && !user.depMem) {
      setDepMem(parseInt(storedDepMem));
    }
    
    const storedDepDetails = localStorage.getItem('depDetails');
    if (storedDepDetails && !user.depDetails) {
      setDepDetails(JSON.parse(storedDepDetails));
    }

  }, []);

  // Update local storage whenever depDetails or depMem change
  useEffect(() => {
    // console.log("depDetails" , depDetails);
    localStorage.setItem('depDetails', JSON.stringify(depDetails));
    localStorage.setItem('depMem', depMem);
  }, [depDetails, depMem]);



  const handleDepMemChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setDepMem(parsedValue);
      setDepDetails(Array(parsedValue).fill({ name: '', age: '', gender: '', eduExpi: '' }));
      dispatch({ type: 'UPDATE_USER', payload: { ...user, depMem: parsedValue, depDetails: Array(parsedValue).fill({ name: '', age: '', gender: '', eduExpi: '' }) } });
    } else {
      console.log("Enter a valid number");
    }
  };

  const handleInputChange = (index, field, value) => {
    setDepDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [field]: value
      };
      return updatedDetails;
    });
  };





  // const formatDataForAPI = () => {
  //   return depDetails.map(dep => ({
  //     child_name: dep.name,
  //     child_age: dep.age,
  //     child_gender: dep.gender,
  //     child_edu_expi: dep.eduExpi
  //   }));
  // };

  // const sendDataToAPI = async () => {
  //   try {
  //     const formattedData = {
  //       children: formatDataForAPI(),
  //       family_no_dep: depMem
  //     };
  //     const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  //         const accessToken = authTokens.access;
      
  //         const headers = {
  //           'Authorization': `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         };
  //     const response = await axios.put('http://127.0.0.1:8000/api/profile/', formattedData, { headers });
  //     console.log(response.data); // Log the response from the API
  //   } catch (error) {
  //     console.error("Error sending data to API:", error);
  //   }
  // };

  const handleNext = () => {
    setCurrentDepIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentDepIndex(prevIndex => prevIndex - 1);
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
      {depDetails.map((dep, index) => (
        <div key={index} style={{ display: index === currentDepIndex ? 'block' : 'none' }}>
          <Grid item xs={12}>
            <TextField
              id={`dependentName${index}`}
              label='Name'
              name={`dependentName${index}`}
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
              id={`dependentAge${index}`}
              label='Age'
              name={`dependentAge${index}`}
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
              id={`dependentEduExpi${index}`}
              label='Medical Expenditure'
              name={`dependentEduExpi${index}`}
              type='number'
              value={dep.eduExpi}
              onChange={(e) => handleInputChange(index, 'eduExpi', e.target.value)}
              required
              variant='outlined'
              margin='normal'
              fullWidth
            />
          </Grid>
        </div>
      ))}
      <Grid item xs={12} className={classes.buttonContainer}>
        {currentDepIndex > 0 && (
          <Button variant="contained" color="primary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {currentDepIndex < depMem - 1 && (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        
      </Grid>
    </Grid>
  );
};

export default Summary;
