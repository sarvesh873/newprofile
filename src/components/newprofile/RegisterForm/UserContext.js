import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default props => {
  const [state, setState] = useState({
    user: {
      username: "",
      gender: "",
      birthdate: new Date().toISOString().slice(0, 10),
      location: "",
      salary:0,
      profession: "",
      acceptTerms: false,
      newsletter: false,
      goalAmount: "",
      goalDuration: "",
      depMem: "", // New field for number of dependent members
      child: "",
    },
    expenditure: {
      hasLoan: false,
      loanAmount: 0,
      hasInsurance: false,
      insuranceAmount: 0
    },
    errors: {},
    // depDetails: [] 
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
