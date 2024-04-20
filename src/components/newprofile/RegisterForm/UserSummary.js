import React, { useContext, Fragment } from "react";
import { UserContext } from "./UserContext";
import { makeStyles } from "@material-ui/core/styles";

//GENERAL
import {
  Typography,
  Grid,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2)
  }
}));

// SUMMARY COMPONENT
export default props => {
  const classes = useStyles();
  const [state] = useContext(UserContext);
  const {
    username,
    birthdate,
    goalAmount,
    goalDuration,
    hasInsurance,
    hasLoan,
    insuranceAmount,
    loanAmount,
    location,
    monthlyExpenditure,
    profession,
    salary
  } = state.user;

  function calculateAge(birthdateString) {
    const birthdate = new Date(birthdateString);
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    
    const monthDiff = currentDate.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
      age--;
    }
    
    return age;
  }
  

  const storedGender = localStorage.getItem('gender');
  const numOfChildrensDep = localStorage.getItem('numOfChildrensDep');
  const pchildrenDetails = localStorage.getItem('childrensDepDetails');
  const childrenDetails = JSON.parse(pchildrenDetails);

  const depMem = localStorage.getItem('depMem');
  const pdepDetails = localStorage.getItem('depDetails');
  const depDetails = JSON.parse(pdepDetails);

  const age = calculateAge(birthdate);

  return (
    <Fragment>
      <Grid container className={classes.summary}>
        <Grid item xs={12}>
          <Typography variant='h4'>Summary</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6'>Username</Typography>
          <Typography variant='body2'>{username}</Typography>
        </Grid>
        
        <Grid item xs={4}>
          <Typography variant='h6'>Birthdate</Typography>
          <Typography variant='body2'>{birthdate}</Typography>
        </Grid>

        <Grid item xs={4}>
        <Typography variant='h6'>Age</Typography>
        <Typography variant='body2'>{age}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h6'>Gender</Typography>
          <Typography variant='body2'>{storedGender}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6'>Profession</Typography>
          <Typography variant='body2'>{profession}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6'>Salary</Typography>
          <Typography variant='body2'>{salary}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6'>Location</Typography>
          <Typography variant='body2'>{location}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h6'>Monthly Expenditure</Typography>
          <Typography variant='body2'>{monthlyExpenditure}</Typography>
        </Grid>
       
        <Grid item xs={4}>
          <Typography variant='h6'>Has Insurance</Typography>
          <Typography variant='body2'>{hasInsurance ? "Yes" : "No"}</Typography>
        </Grid>
        {hasInsurance && (
          <Fragment>
            <Grid item xs={4}>
              <Typography variant='h6'>Insurance Amount</Typography>
              <Typography variant='body2'>{insuranceAmount}</Typography>
            </Grid>
          </Fragment>
        )}
        <Grid item xs={4}>
          <Typography variant='h6'>Has Loan</Typography>
          <Typography variant='body2'>{hasLoan ? "Yes" : "No"}</Typography>
        </Grid>
        {hasLoan && (
          <Fragment>
            <Grid item xs={4}>
              <Typography variant='h6'>Loan Amount</Typography>
              <Typography variant='body2'>{loanAmount}</Typography>
            </Grid>
          </Fragment>
        )}


        <Grid item xs={4}>
          <Typography variant='h6'>Goal Amount</Typography>
          <Typography variant='body2'>{goalAmount}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h6'>Goal Duration</Typography>
          <Typography variant='body2'>{goalDuration}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h6'>Number of Children's : {numOfChildrensDep}</Typography>
        </Grid>
        
        {numOfChildrensDep > 0 && (
          <Fragment>
            {Object.keys(childrenDetails).map((key, index) => (
              <Grid container key={index}>
                <Grid item xs={2}>
                  <Typography variant='h6'>Child {index + 1}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body2'>Name: {childrenDetails[index].name}</Typography>
                  <Typography variant='body2'>Age: {childrenDetails[index].age}</Typography>
                  <Typography variant='body2'>Gender: {childrenDetails[index].gender}</Typography>
                  <Typography variant='body2'>Education Expenditure: {childrenDetails[index].eduExpenditure}</Typography>
                </Grid>
              </Grid>
            ))}
          </Fragment>
        )}
        
        <Grid item xs={18}>
          <Typography variant='h6'>Number of Members Dependents : {depMem}</Typography>
        </Grid>
        
        {depMem > 0 && (
          <Fragment>
            {Object.keys(depDetails).map((key, index) => (
              <Grid container key={index}>
                <Grid item xs={3}>
                  <Typography variant='h6'>Member {index + 1}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant='body2'>Name: {depDetails[index].name}</Typography>
                  <Typography variant='body2'>Age: {depDetails[index].age}</Typography>
                  <Typography variant='body2'>Gender: {depDetails[index].gender}</Typography>
                  <Typography variant='body2'>Medical Expenditure: {depDetails[index].eduExpi}</Typography>
                </Grid>
              </Grid>
            ))}
          </Fragment>
        )}
        
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.user.acceptTerms}
                required
                color='primary'
                name='acceptTerms'
              />
            }
            label='I accept terms and conditions'
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
