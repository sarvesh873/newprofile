import React, { Fragment, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// MY MODULES
import UserPreferences from "./UserPreferences";
import UserDetails from "./UserDetails";
import UserSummary from "./UserSummary";
import Userdependent from "./Userdependent";
import Childdependdetails from "./Childdependdetails";
import FormComplete from "./FormComplete";
import GoalDetails from "./Goaldetails";
import Expendituredetails from "./Expendituredetails";
// GENERAL
import { Box, Typography, Snackbar, SnackbarContent } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
// STEPPER
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
// FORM
import Button from "@material-ui/core/Button";
// CONTEXT
import { UserContext } from "./UserContext";
import { jwtDecode } from "jwt-decode";
const swal = require("sweetalert2");

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 12),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 6),
    },
  },
  center: {
    textAlign: "center",
  },
  content: {
    padding: theme.spacing(3, 0, 3, 5),
  },
  buttonsContainer: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const steps = [
  "Personal Details",
  "Income Details",
  "Dependent Member Details",
  "Childdependdetails",
  "Expendituredetails",
  "GoalDetails",
  "Summary",
];

// MAIN COMPONENT
export default (props) => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [errors] = useState({});
  const [open, setOpen] = useState(false);
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenString = localStorage.getItem("authTokens");
        const token = JSON.parse(tokenString);
        const decoded = jwtDecode(token.access);
        const apiUrl = "http://127.0.0.1:8000/api/profile/";
        const accessToken = token.access;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();

        if (data) {
          console.log("od");
          setState({
            ...state,
            user: {
              ...data,
              // Optionally, you can spread other properties of state.user here
            },
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchData();
    }
  }, []); // Empty dependency array to run only once

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };
  const handleCloseSnackbar = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();
    else {
      submitFormData();
    }
  };

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
    salary,
  } = state.user;

  // Function to calculate age

  const storedGender = localStorage.getItem("gender");
  const numOfChildrensDep = localStorage.getItem("numOfChildrensDep");
  const pchildrenDetails = localStorage.getItem("childrensDepDetails");
  const childrenDetails = JSON.parse(pchildrenDetails);

  const depMem = localStorage.getItem("depMem");
  const pdepDetails = localStorage.getItem("depDetails");
  const depDetails = JSON.parse(pdepDetails);
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
  const age = calculateAge(birthdate);
  const formatdepDataForAPI = () => {
    return childrenDetails.map((child) => ({
      child_name: child.name,
      child_age: parseInt(child.age),
      child_gender: child.gender,
      child_edu_expi: parseInt(child.eduExpenditure),
    }));
  };

  const formatchildDataForAPI = () => {
    return depDetails.map((dep) => ({
      family_name: dep.name,
      family_age: parseInt(dep.age),
      family_gender: dep.gender,
      family_med_expi: parseInt(dep.eduExpi),
    }));
  };

  const submitFormData = () => {
    const tokenString = localStorage.getItem("authTokens");
    const token = JSON.parse(tokenString);
    const decoded = jwtDecode(token.access);
    const jusername = decoded.username;

    if (username == jusername) {
      const data = {
        username: username,
        salary: parseInt(salary),
        goal: parseInt(goalAmount),
        age: age,
        gender: storedGender,
        profession: profession,
        family_no_dep: parseInt(depMem),
        has_child: numOfChildrensDep > 0,
        num_children: parseInt(numOfChildrensDep),
        has_loan: hasLoan,
        loan_duration: 0, // You may need to get this from somewhere
        loan_emi: parseInt(loanAmount), // You may need to get this from somewhere
        children: formatdepDataForAPI(),
        family: formatchildDataForAPI(),
      };

      // Now you can send the `data` object to the server using a PUT request
      // Make sure to include the necessary headers and authentication token
      const apiUrl = "http://127.0.0.1:8000/api/profile/";
      const tokenString = localStorage.getItem("authTokens");
      const token = JSON.parse(tokenString);
      const accessToken = token.access;

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update profile");
          }
          // Profile updated successfully
          return response.json();
        })
        .then((data) => {
          // Handle success response if needed
          swal
            .fire({
              title: "Profile Created Successfully",
              icon: "success",
              toast: true,
              timer: 6000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            })
            .then(() => {
              setCompleted(true);
            });
          console.log("Profile updated successfully:", data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error updating profile:", error);
        });
    } else {
      swal.fire({
        title: "Username Did'nt Match",
        icon: "warning",
        toast: true,
        timer: 6000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <UserDetails />;
      case 1:
        return <UserPreferences />;
      case 2:
        return <Userdependent />;
      case 3:
        return <Childdependdetails />;
      case 4:
        return <Expendituredetails />;
      case 5:
        return <GoalDetails />;
      case 6:
        return <UserSummary />;
      default:
        return "Unknown step";
    }
  };

  const handleError = (e) => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state, errors: { ...errors } });
    setOpen(true);
  };

  const handleChange = (e) => {
    //PASSWORD MATCHING
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== state.user.password
    ) {
      e.target.setCustomValidity("Passwords are not matching");
    } else {
      e.target.setCustomValidity("");
    }
    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector(
        "input[name='confirmPassword']"
      );
      // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL
      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
    }
    if (e.target.validity.valid) {
      //OTHER ELEMENTS
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...errors },
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Fragment>
      {!completed && (
        <Box className={classes.root}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant='caption'>Compulsory</Typography>
                );
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  <StepContent>
                    <form
                      onSubmit={handleSubmit}
                      onInvalid={handleError}
                      onChange={handleChange}
                      className={classes.content}
                    >
                      {getStepContent(activeStep)}
                      <div className={classes.buttonsContainer}>
                        <Button
                          disabled={activeStep === 0}
                          className={classes.button}
                          variant='contained'
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                        {activeStep < steps.length - 1 && (
                          <Button
                            type='submit'
                            className={classes.button}
                            variant='contained'
                            color='primary'
                          >
                            Next
                          </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                          <Button
                            type='submit'
                            className={classes.button}
                            variant='contained'
                            color='primary'
                          >
                            Submit
                          </Button>
                        )}
                      </div>
                    </form>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        resumeHideDuration={3000}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        open={open}
      >
        <SnackbarContent
          className={(classes.error, classes.error)}
          message={
            <span className={classes.message}>
              <ErrorIcon className={classes.icon} />
              {"Please correct the data"}
            </span>
          }
        />
      </Snackbar>
      {completed && (
        <Box className={(classes.root, classes.center)}>
          <FormComplete />
        </Box>
      )}
    </Fragment>
  );
};
