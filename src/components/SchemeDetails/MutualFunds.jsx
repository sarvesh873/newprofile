import React from "react";
import styled from "styled-components";

import MutualFundsComponent from "../MutualFunds/MutualFundsComponent";
import MutualFundsInfo from "../MutualFunds/MutualFundsInfo";
import MutualFundAdvantages from "../MutualFunds/MutualFundAdvantages";
import FaqSection from "../MutualFunds/FaqSection";

export default function MutualFundsDetails() {
  return (
    <>
    {/* <MutualFundsComponent />
    <MutualFundsInfo />
    <MutualFundAdvantages /> */}
    <Wrapper>
      <Container>
        <Content>
        <HeaderInfo>
            <Title>Mutual Fund Details</Title>
            <Description>
              Explore various mutual funds to secure your savings.
            </Description>
          </HeaderInfo>
          <CardsContainer>
            {/* Example card */}
            <Card>
              <MediaLeft>
                <MediaPic src="https://img.smartspends.com/static/images/amc_logo/quant.png" alt="Quant Infrastructure Fund" />
              </MediaLeft>
              <MediaRight>
                <SchemeName>
                  <a href="/mutual-funds/quant-infrastructure-fund-direct-growth/16930" title="Quant Infrastructure Fund">Card1</a>
                </SchemeName>
                <MfCategoryTags>
                  <Tag href="/mutual-funds/equity" title="EQUITY"><span>EQUITY</span></Tag>
                  <Tag href="/mutual-funds/equity/sectoral-infrastructure/41" title="Sectoral-Infrastructure"><span>Sectoral-Infrastructure</span></Tag>
                </MfCategoryTags>
                <MediaDetails>
                  <WrapperNewLists>
                    <Row>
                      <Item className="aum">AUM: ₹2,498 Crs</Item>
                      <Item className="one-day-change">1 day change: <img width="10px" height="10px" src="https://img.smartspends.com/static/images/dashboard/top-arrow-red.svg" alt="arrowIcon" /> -0.79%</Item>
                      <Item className="current-value">Current Value: ₹18.51 Lakh</Item>
                      <Item className="return-pa">Return (p.a): +36.96% p.a.</Item>
                    </Row>
                    <Row>
                      <Item className="etm-rank">ETM Rank: #5 of 19 in Sectoral-Infrastructure</Item>
                      <Item className="expense-ratio">Expense Ratio: 0.73%</Item>
                      <Item className="age">Age: 11+ yrs</Item>
                      <Item className="blank-item"></Item>
                    </Row>
                  </WrapperNewLists>
                </MediaDetails>
                <NewCompareSect>
                  <TextRight>
                    <CompareInvestBlock>
                      <InvestBtn href="/mutual-funds/investment-details/16930" title="Invest">Invest</InvestBtn>
                    </CompareInvestBlock>
                    <CheckboxField>
                      <Checkbox type="checkbox" name="addToCompare" data-scheme-id="16930" data-scheme-name="Quant Infrastructure Fund" data-logo="https://img.smartspends.com/static/images/amc_logo/quant.png" />
                      <CheckboxText>Add to compare</CheckboxText>
                    </CheckboxField>
                  </TextRight>
                </NewCompareSect>
              </MediaRight>
            </Card>
            <Card>
              <MediaLeft>
                <MediaPic src="https://img.smartspends.com/static/images/amc_logo/quant.png" alt="Quant Infrastructure Fund" />
              </MediaLeft>
              <MediaRight>
                <SchemeName>
                  <a href="/mutual-funds/quant-infrastructure-fund-direct-growth/16930" title="Quant Infrastructure Fund">Card2</a>
                </SchemeName>
                <MfCategoryTags>
                  <Tag href="/mutual-funds/equity" title="EQUITY"><span>EQUITY</span></Tag>
                  <Tag href="/mutual-funds/equity/sectoral-infrastructure/41" title="Sectoral-Infrastructure"><span>Sectoral-Infrastructure</span></Tag>
                </MfCategoryTags>
                <MediaDetails>
                  <WrapperNewLists>
                    <Row>
                      <Item className="aum">AUM: ₹2,498 Crs</Item>
                      <Item className="one-day-change">1 day change: <img width="10px" height="10px" src="https://img.smartspends.com/static/images/dashboard/top-arrow-red.svg" alt="arrowIcon" /> -0.79%</Item>
                      <Item className="current-value">Current Value: ₹18.51 Lakh</Item>
                      <Item className="return-pa">Return (p.a): +36.96% p.a.</Item>
                    </Row>
                    <Row>
                      <Item className="etm-rank">ETM Rank: #5 of 19 in Sectoral-Infrastructure</Item>
                      <Item className="expense-ratio">Expense Ratio: 0.73%</Item>
                      <Item className="age">Age: 11+ yrs</Item>
                      <Item className="blank-item"></Item>
                    </Row>
                  </WrapperNewLists>
                </MediaDetails>
                <NewCompareSect>
                  <TextRight>
                    <CompareInvestBlock>
                      <InvestBtn href="/mutual-funds/investment-details/16930" title="Invest">Invest</InvestBtn>
                    </CompareInvestBlock>
                    <CheckboxField>
                      <Checkbox type="checkbox" name="addToCompare" data-scheme-id="16930" data-scheme-name="Quant Infrastructure Fund" data-logo="https://img.smartspends.com/static/images/amc_logo/quant.png" />
                      <CheckboxText>Add to compare</CheckboxText>
                    </CheckboxField>
                  </TextRight>
                </NewCompareSect>
              </MediaRight>
            </Card>
            <Card>
              <MediaLeft>
                <MediaPic src="https://img.smartspends.com/static/images/amc_logo/quant.png" alt="Quant Infrastructure Fund" />
              </MediaLeft>
              <MediaRight>
                <SchemeName>
                  <a href="/mutual-funds/quant-infrastructure-fund-direct-growth/16930" title="Quant Infrastructure Fund">Card3</a>
                </SchemeName>
                <MfCategoryTags>
                  <Tag href="/mutual-funds/equity" title="EQUITY"><span>EQUITY</span></Tag>
                  <Tag href="/mutual-funds/equity/sectoral-infrastructure/41" title="Sectoral-Infrastructure"><span>Sectoral-Infrastructure</span></Tag>
                </MfCategoryTags>
                <MediaDetails>
                  <WrapperNewLists>
                    <Row>
                      <Item className="aum">AUM: ₹2,498 Crs</Item>
                      <Item className="one-day-change">1 day change: <img width="10px" height="10px" src="https://img.smartspends.com/static/images/dashboard/top-arrow-red.svg" alt="arrowIcon" /> -0.79%</Item>
                      <Item className="current-value">Current Value: ₹18.51 Lakh</Item>
                      <Item className="return-pa">Return (p.a): +36.96% p.a.</Item>
                    </Row>
                    <Row>
                      <Item className="etm-rank">ETM Rank: #5 of 19 in Sectoral-Infrastructure</Item>
                      <Item className="expense-ratio">Expense Ratio: 0.73%</Item>
                      <Item className="age">Age: 11+ yrs</Item>
                      <Item className="blank-item"></Item>
                    </Row>
                  </WrapperNewLists>
                </MediaDetails>
                <NewCompareSect>
                  <TextRight>
                    <CompareInvestBlock>
                      <InvestBtn href="/mutual-funds/investment-details/16930" title="Invest">Invest</InvestBtn>
                    </CompareInvestBlock>
                    <CheckboxField>
                      <Checkbox type="checkbox" name="addToCompare" data-scheme-id="16930" data-scheme-name="Quant Infrastructure Fund" data-logo="https://img.smartspends.com/static/images/amc_logo/quant.png" />
                      <CheckboxText>Add to compare</CheckboxText>
                    </CheckboxField>
                  </TextRight>
                </NewCompareSect>
              </MediaRight>
            </Card>
            <Card>
              <MediaLeft>
                <MediaPic src="https://img.smartspends.com/static/images/amc_logo/quant.png" alt="Quant Infrastructure Fund" />
              </MediaLeft>
              <MediaRight>
                <SchemeName>
                  <a href="/mutual-funds/quant-infrastructure-fund-direct-growth/16930" title="Quant Infrastructure Fund">Card4</a>
                </SchemeName>
                <MfCategoryTags>
                  <Tag href="/mutual-funds/equity" title="EQUITY"><span>EQUITY</span></Tag>
                  <Tag href="/mutual-funds/equity/sectoral-infrastructure/41" title="Sectoral-Infrastructure"><span>Sectoral-Infrastructure</span></Tag>
                </MfCategoryTags>
                <MediaDetails>
                  <WrapperNewLists>
                    <Row>
                      <Item className="aum">AUM: ₹2,498 Crs</Item>
                      <Item className="one-day-change">1 day change: <img width="10px" height="10px" src="https://img.smartspends.com/static/images/dashboard/top-arrow-red.svg" alt="arrowIcon" /> -0.79%</Item>
                      <Item className="current-value">Current Value: ₹18.51 Lakh</Item>
                      <Item className="return-pa">Return (p.a): +36.96% p.a.</Item>
                    </Row>
                    <Row>
                      <Item className="etm-rank">ETM Rank: #5 of 19 in Sectoral-Infrastructure</Item>
                      <Item className="expense-ratio">Expense Ratio: 0.73%</Item>
                      <Item className="age">Age: 11+ yrs</Item>
                      <Item className="blank-item"></Item>
                    </Row>
                  </WrapperNewLists>
                </MediaDetails>
                <NewCompareSect>
                  <TextRight>
                    <CompareInvestBlock>
                      <InvestBtn href="/mutual-funds/investment-details/16930" title="Invest">Invest</InvestBtn>
                    </CompareInvestBlock>
                    <CheckboxField>
                      <Checkbox type="checkbox" name="addToCompare" data-scheme-id="16930" data-scheme-name="Quant Infrastructure Fund" data-logo="https://img.smartspends.com/static/images/amc_logo/quant.png" />
                      <CheckboxText>Add to compare</CheckboxText>
                    </CheckboxField>
                  </TextRight>
                </NewCompareSect>
              </MediaRight>
            </Card>
          </CardsContainer>
        </Content>
      </Container>
    </Wrapper>
    {/* <FaqSection /> */}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 0 20px; 
`;

const Content = styled.div`
  margin-top: 50px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column to stack cards vertically */
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: text-wrap;
  width: 100%; /* Set width to 100% to ensure the card occupies full width */
  max-width: 1000px; /* Limit the maximum width of the card */
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically inside the card */
`;

const MediaLeft = styled.div`
  padding: 15px;
`;

const MediaPic = styled.img`
  width: 30px;
  height: 30px;
`;

const MediaRight = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

const SchemeName = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const MfCategoryTags = styled.div`
  margin-bottom: 10px;
`;

const Tag = styled.a`
  margin-right: 5px;
`;

const MediaDetails = styled.div`
  margin-top: 10px;
`;

const WrapperNewLists = styled.div`
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 30px;
`;

const NewCompareSect = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextRight = styled.div`
  display: flex;
  align-items: center;
`;

const CompareInvestBlock = styled.div`
  margin-right: 10px;
  padding-left: 30px;
`;

const InvestBtn = styled.a`
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxField = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxText = styled.span`
  font-size: 14px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #0B093B;
`;

const Description = styled.p`
  margin-top: 5px;
  font-size: 16px;
  color: #0B093B;
`;