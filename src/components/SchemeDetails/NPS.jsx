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

// NPSDetails component
export default function NPS() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>National Pension System (NPS) Details</Title>
            <Description>
              Explore various National Pension System (NPS) options for retirement planning.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Contribution</TableHeader>
                  <TableHeader>Tax Benefits</TableHeader>
                  <TableHeader>Learn More</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>NPS Option 1</TableCell>
                  <TableCell>Description of NPS Option 1</TableCell>
                  <TableCell>Voluntary Contribution</TableCell>
                  <TableCell>Tax Deduction</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>NPS Option 2</TableCell>
                  <TableCell>Description of NPS Option 2</TableCell>
                  <TableCell>Employer Contribution</TableCell>
                  <TableCell>Tax Exemption</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>NPS Option 3</TableCell>
                  <TableCell>Description of NPS Option 3</TableCell>
                  <TableCell>Government Contribution</TableCell>
                  <TableCell>Tax Benefits on Withdrawal</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>NPS Option 4</TableCell>
                  <TableCell>Description of NPS Option 4</TableCell>
                  <TableCell>Employee Contribution</TableCell>
                  <TableCell>Tax Benefits on Investment</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>NPS Option 5</TableCell>
                  <TableCell>Description of NPS Option 5</TableCell>
                  <TableCell>Self Contribution</TableCell>
                  <TableCell>Tax Benefits on Returns</TableCell>
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
