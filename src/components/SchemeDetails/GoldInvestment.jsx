import React from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.section`
  margin-top: 2%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
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

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
//   border: 2px solid #0b093b;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: left;
  color: #333;
//   border-right: 1px solid #a8a8a8;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  color: #666;
//   border-right: 1px solid #a8a8a8;
`;

const LinkCell = styled.td`
  padding: 15px;
  color: #7620FF;
  text-decoration: underline;
  cursor: pointer;
`;

// GoldInvestmentDetails component
export default function GoldInvestmentDetails() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>Gold Investment Options</Title>
            <Description>
              Explore various gold investment options to diversify your portfolio and hedge against market volatility.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Investment Type</TableHeader>
                  <TableHeader>Pros</TableHeader>
                  <TableHeader>Cons</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>Gold ETFs</TableCell>
                  <TableCell>Exchange-Traded Funds backed by physical gold.</TableCell>
                  <TableCell>Passive</TableCell>
                  <TableCell>Liquidity, Low Cost</TableCell>
                  <TableCell>Market Risk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gold Coins</TableCell>
                  <TableCell>Purchasing physical gold coins for investment purposes.</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Security, Tangible Asset</TableCell>
                  <TableCell>Storage Costs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gold Futures</TableCell>
                  <TableCell>Contracts to buy or sell gold at a predetermined price in the future.</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Potential for High Returns</TableCell>
                  <TableCell>Risk of Loss</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gold Mining Stocks</TableCell>
                  <TableCell>Investing in companies engaged in gold mining.</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Potential for High Returns</TableCell>
                  <TableCell>Company-Specific Risks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gold Mutual Funds</TableCell>
                  <TableCell>Mutual funds investing in companies related to gold production.</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Diversification</TableCell>
                  <TableCell>Market Risk</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}
