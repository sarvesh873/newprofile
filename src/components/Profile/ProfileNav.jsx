import React from "react";
import styled from "styled-components";

const ProfileNav = ({ steps, currentStep }) => {
    return (
        <StyledNav>
            <ul>
                {steps.map((step, index) => (
                    <li key={index} className= {index === currentStep ? "active" : ""}>
                        {step}
                    </li>
                ))}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }

  li.active {
    background-color: #7620ff;
    color: white;
  }
`;

export default ProfileNav;