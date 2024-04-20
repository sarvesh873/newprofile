import React, { useState, useContext, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { UserContext } from "./UserContext";

const GoalDetails = () => {
  const [state, setState] = useContext(UserContext); // Using context to access and update the user state
  const { user } = state; // Destructuring user object from state

  const [goalAmount, setGoalAmount] = useState(user.goalAmount || ""); // State for goal amount, prefilling if data exists
  const [goalDuration, setGoalDuration] = useState(user.goalDuration || ""); // State for goal duration, prefilling if data exists

  // Function to handle changes in goal amount
  const handleGoalAmountChange = (e) => {
    const amount = e.target.value;
    setGoalAmount(amount);

    // Update user state with the new goal amount
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        goalAmount: amount,
      },
    }));
  };

  // Function to handle changes in goal duration
  const handleGoalDurationChange = (e) => {
    const duration = e.target.value;
    setGoalDuration(duration);

    // Update user state with the new goal duration
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        goalDuration: duration,
      },
    }));
  };
  // useEffect(() => {
  //   console.log("Updated state:", state);
  // }, [state]);

  return (
    <div>
      <h2>Goal Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="goalAmount"
            label="Goal Amount"
            name="goalAmount"
            type="number"
            value={goalAmount} // Controlled component with goalAmount state
            onChange={handleGoalAmountChange} // Handle changes in goal amount
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="goalDuration"
            label="Goal Duration (in months/ years, please specify)"
            name="goalDuration"
            type="number"
            value={goalDuration} // Controlled component with goalDuration state
            onChange={handleGoalDurationChange} // Handle changes in goal duration
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default GoalDetails;
