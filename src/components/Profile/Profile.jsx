import React, { useState } from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav.jsx";
import StepForm from "./StepForm";

export default function Profile() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["1. Personal Details", "2. Income Details", "3. Dependency Details", "4. Dependent Member Details", "5. Children Details", "6. Expenditure Details", "7. Goal Details"];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Wrapper id="profile">
        <div className="lightBg">
              <HeaderInfo>
                <br />
                <h1 className="font40 extraBold">Add Profile Details</h1>
                <p className="font14">
                  Unlock the full potential of our financial services by
                  enhancing your profile. Your added information allows us to
                  craft personalized strategies aligned with your unique goals.
                  A complete profile ensures our guidance is finely tuned to
                  your financial aspirations, providing you with a more tailored
                  and effective experience.
                  <br />
                  Take the first step towards financial empowerment—complete
                  your profile today!
                </p>
              </HeaderInfo>
            </div>
      <Container>
      <Sidebar>
          <ProfileNav steps={steps} currentStep={currentStep} />
        </Sidebar>
        <Content>
            <StepForm
              currentStep={currentStep}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const Container = styled.div`
  display: flex;
  margin-left: 150px;
  margin-right: 150px;

  @media (max-width: 860px) {
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
  }
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f2f2f2;

  @media (max-width: 860px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;