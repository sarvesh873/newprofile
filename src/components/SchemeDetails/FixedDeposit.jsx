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
  // border: 2px solid #0b093b;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: left;
  color: #333;
  // border-right: 1px solid #a8a8a8;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  color: #666;
  // border-right: 1px solid #a8a8a8;
`;

const LinkCell = styled.td`
  padding: 15px;
  color: #7620FF;
  text-decoration: underline;
  cursor: pointer;
`;

// FixedDepositDetails component
export default function FixedDepositDetails() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>Fixed Deposit Details</Title>
            <Description>
              Explore various fixed deposit schemes to secure your savings.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Interest Rate</TableHeader>
                  <TableHeader>Tenure</TableHeader>
                  <TableHeader>Learn More</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>Fixed Deposit Scheme 1</TableCell>
                  <TableCell>Description of Fixed Deposit Scheme 1</TableCell>
                  <TableCell>5.5%</TableCell>
                  <TableCell>3 years</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fixed Deposit Scheme 2</TableCell>
                  <TableCell>Description of Fixed Deposit Scheme 2</TableCell>
                  <TableCell>6.0%</TableCell>
                  <TableCell>5 years</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fixed Deposit Scheme 3</TableCell>
                  <TableCell>Description of Fixed Deposit Scheme 3</TableCell>
                  <TableCell>5.75%</TableCell>
                  <TableCell>4 years</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fixed Deposit Scheme 4</TableCell>
                  <TableCell>Description of Fixed Deposit Scheme 4</TableCell>
                  <TableCell>5.25%</TableCell>
                  <TableCell>2 years</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fixed Deposit Scheme 5</TableCell>
                  <TableCell>Description of Fixed Deposit Scheme 5</TableCell>
                  <TableCell>6.5%</TableCell>
                  <TableCell>7 years</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}
