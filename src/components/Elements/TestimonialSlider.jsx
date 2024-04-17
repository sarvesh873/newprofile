import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="FinVise has been a game-changer for me. The personalized investment suggestions and real-time market insights have helped me make informed decisions. It's like having a financial advisor in my pocket!"
            author="Sarah T."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I've never felt more in control of my finances. The goal-based planning feature helped me set clear objectives, and the app's recommendations have been spot on. Highly recommended!"
            author="David M."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="As a novice investor, I was intimidated by the world of finance. FinVise's user-friendly interface and educational resources have made the learning process a breeze. I'm now confident in my investment choices."
            author="Jessica R."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The tax optimization strategies provided by FinVise have saved me a significant amount of money. It's a powerful tool that every savvy investor should have in their arsenal."
            author="John L."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I've tried several financial apps, but FinVise stands out for its comprehensive approach. It's not just about investments; it's about holistic financial planning. A must-have for anyone serious about their financial future."
            author=" Michael B."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The retirement planning simulator is a game-changer. It's given me peace of mind knowing that I'm on track for a comfortable retirement. I can't imagine managing my finances without FinVise."
            author="Anna K."
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
