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

// PPFDetails component
export default function PPFDetails() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>Public Provident Fund (PPF)</Title>
            <Description>
              Explore various PPF options to secure your future and enjoy tax benefits.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Tenure</TableHeader>
                  <TableHeader>Interest Rate</TableHeader>
                  <TableHeader>Pros</TableHeader>
                  <TableHeader>Cons</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>PPF Scheme 1</TableCell>
                  <TableCell>Description of PPF Scheme 1</TableCell>
                  <TableCell>15 years</TableCell>
                  <TableCell>7.1%</TableCell>
                  <TableCell>Tax Benefits, Long-Term Investment</TableCell>
                  <TableCell>Lock-in Period, Low Liquidity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PPF Scheme 2</TableCell>
                  <TableCell>Description of PPF Scheme 2</TableCell>
                  <TableCell>15 years</TableCell>
                  <TableCell>7.1%</TableCell>
                  <TableCell>Fixed Returns, Tax Benefits</TableCell>
                  <TableCell>Lock-in Period, Low Liquidity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PPF Scheme 3</TableCell>
                  <TableCell>Description of PPF Scheme 3</TableCell>
                  <TableCell>15 years</TableCell>
                  <TableCell>7.1%</TableCell>
                  <TableCell>Safe Investment, Tax Benefits</TableCell>
                  <TableCell>Lock-in Period, Low Liquidity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PPF Scheme 4</TableCell>
                  <TableCell>Description of PPF Scheme 4</TableCell>
                  <TableCell>15 years</TableCell>
                  <TableCell>7.1%</TableCell>
                  <TableCell>Long-Term Savings, Tax Benefits</TableCell>
                  <TableCell>Lock-in Period, Low Liquidity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PPF Scheme 5</TableCell>
                  <TableCell>Description of PPF Scheme 5</TableCell>
                  <TableCell>15 years</TableCell>
                  <TableCell>7.1%</TableCell>
                  <TableCell>Stable Returns, Tax Benefits</TableCell>
                  <TableCell>Lock-in Period, Low Liquidity</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}
