import React, { useState, useContext, useEffect } from "react";
import { Grid, TextField, Checkbox } from "@material-ui/core";
import { UserContext } from "./UserContext";
import FormControlLabel from "@mui/material/FormControlLabel";

const ExpenditureDetails = (props) => {
  const [state, setState] = useContext(UserContext);
  const { user } = state;
  const { monthlyExpenditure, hasLoan: initialHasLoan, loanAmount, hasInsurance: initialHasInsurance, insuranceAmount } = user;
  const [hasLoan, setHasLoan] = useState(initialHasLoan);
  const [hasInsurance, setHasInsurance] = useState(initialHasInsurance);

  const handleHasLoanChange = (e) => {
    const newHasLoan = e.target.checked;
    setHasLoan(newHasLoan);
  };

  const handleHasInsuranceChange = (e) => {
    const newHasInsurance = e.target.checked;
    setHasInsurance(newHasInsurance);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        hasLoan: hasLoan,
      },
    }));
  }, [hasLoan, setState]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        hasInsurance: hasInsurance,
      },
    }));
  }, [hasInsurance, setState]);

  useEffect(() => {
    // Check if hasLoan is false or null, then set loanAmount to 0
    const newLoanAmount = hasLoan ? state.user.loanAmount : 0;
    const newInsuranceAmount = hasInsurance ? state.user.insuranceAmount : 0;
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        loanAmount: newLoanAmount,
        insuranceAmount : newInsuranceAmount,
      },
    }));
  }, [hasLoan, state.user.loanAmount,hasInsurance,insuranceAmount]);




  return (
    <div>
      <h2>Expenditure Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="monthlyExpenditure"
            label="Monthly Expenditure"
            name="monthlyExpenditure"
            type="number"
            value={monthlyExpenditure}
            onChange={(e) => setState((prevState) => ({ ...prevState, user: { ...prevState.user, monthlyExpenditure: e.target.value } }))}
            required
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={hasLoan} onChange={handleHasLoanChange} color="primary" />}
            label="Do you have a loan?"
          />
        </Grid>
        {hasLoan && (
          <Grid item xs={12}>
            <TextField
              id="loanAmount"
              label="Loan Amount"
              name="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setState((prevState) => ({ ...prevState, user: { ...prevState.user, loanAmount: e.target.value } }))}
              required={hasLoan}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={hasInsurance} onChange={handleHasInsuranceChange} color="primary" />}
            label="Do you have insurance?"
          />
        </Grid>
        {hasInsurance && (
          <Grid item xs={12}>
            <TextField
              id="insuranceAmount"
              label="Insurance Amount"
              name="insuranceAmount"
              type="number"
              value={insuranceAmount}
              onChange={(e) => setState((prevState) => ({ ...prevState, user: { ...prevState.user, insuranceAmount: e.target.value } }))}
              required={hasInsurance}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ExpenditureDetails;
