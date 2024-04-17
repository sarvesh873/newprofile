import React, { useContext } from "react";
import { Grid, TextField } from "@material-ui/core";
import { UserContext } from "./UserContext";

export default props => {
  const [state, setState] = useContext(UserContext);
  const { hasLoan, loanAmount, hasInsurance, insuranceAmount } = state.expenditure;

  const handleHasLoanChange = (e) => {
    setState(prevState => ({
      ...prevState,
      expenditure: {
        ...prevState.expenditure,
        hasLoan: e.target.checked
      }
    }));
  };

  const handleHasInsuranceChange = (e) => {
    setState(prevState => ({
      ...prevState,
      expenditure: {
        ...prevState.expenditure,
        hasInsurance: e.target.checked
      }
    }));
  };

  return (
    <div>
      <h2>Expenditure Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id='monthlyExpenditure'
            label='Monthly Expenditure (in thousands)'
            name='monthlyExpenditure'
            type='number'
            required
            variant='outlined'
            margin='normal'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='hasLoan'
            label='Do you have a loan?'
            name='hasLoan'
            type='checkbox'
            checked={hasLoan}
            onChange={handleHasLoanChange}
          />
        </Grid>
        {hasLoan && (
          <Grid item xs={12}>
            <TextField
              id='loanAmount'
              label='Loan Amount'
              name='loanAmount'
              type='number'
              required={hasLoan}
              variant='outlined'
              margin='normal'
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            id='hasInsurance'
            label='Do you have insurance?'
            name='hasInsurance'
            type='checkbox'
            checked={hasInsurance}
            onChange={handleHasInsuranceChange}
          />
        </Grid>
        {hasInsurance && (
          <Grid item xs={12}>
            <TextField
              id='insuranceAmount'
              label='Insurance Amount'
              name='insuranceAmount'
              type='number'
              required={hasInsurance}
              variant='outlined'
              margin='normal'
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
