import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import TopNavbar from "../Nav/TopNavbar";
import { useNavigate } from 'react-router-dom';
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import AddImage2 from "../../assets/img/add/add2.png";

export default function AllSchemes() {
  const navigate = useNavigate();
  const handlemutualFunds = () => {
    navigate("/mutual-funds");
  };
  const handleFixedDeposit = () => {
    navigate("/fixed-deposit");
  };
  const handleNPS = () => {
    navigate("/nps");
  };
  const handleHealthInsurance = () => {
    navigate("/health-insurance");
  };
  const handleGoldInvestment = () => {
    navigate("/gold-investment")
  }
  const handlePPF = () => {
    navigate("/ppf")
  }


  return (
    <>
    <TopNavbar />
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">All Available Schemes</h1>
            <p className="font13">
            Gain comprehensive insights into our meticulously curated investment schemes. Each scheme is thoughtfully designed to cater to diverse financial goals and risk appetites. 
            <br />Explore detailed information, historical performance, and expert analysis to make informed investment decisions tailored to your unique needs.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
                img={ProjectImg1}
                title="Mutual Funds"
                text="Mutual Funds are a smart way to grow your money. They can help you achieve your financial goals as they have the potential to generate higher-than-inflation returns."
                action={() => handlemutualFunds()}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Fixed Deposit"
                text="A fixed deposit or FD is an investment product offered by banks and Non-Banking Finance Companies (NBFCs). In FDs, you invest for a set amount of time and get a fixed interest rate."
                action={() => handleFixedDeposit()}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="National Pension System"
                text="The National Pension System (NPS) is a voluntary and contributory pension scheme launched by the Government of India. It aims to provide retirement income to Indian citizens."
                action={() => handleNPS()}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Health Insurance"
                text="Health insurance protects you from unexpected, high medical costs. In case you or any family members covered under the policy is hospitalized, it company will pay for the hospital expenses up to the cover amount."
                action={() => handleHealthInsurance()}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Gold Investment"
                text="Gold investment can be done in many forms like buying jewelry, coins, bars, gold exchange-traded funds, Gold funds, sovereign gold bond scheme, etc."
                action={() => handleGoldInvestment()}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Public Provident Fund"
                text="PPF meaning can be simply stated as a long-term investment scheme, popular among individuals who want to earn high but stable returns. Proper safekeeping of the principal amount is the prime target of individuals opening a PPF account."
                action={() => handlePPF()}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  margin-top: 5%;
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
