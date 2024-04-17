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

// HealthInsuranceDetails component
export default function HealthInsuranceDetails() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>Health Insurance Details</Title>
            <Description>
              Explore various health insurance plans to protect yourself and your family.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Coverage</TableHeader>
                  <TableHeader>Premium</TableHeader>
                  <TableHeader>Learn More</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>Health Insurance Plan 1</TableCell>
                  <TableCell>Description of Health Insurance Plan 1</TableCell>
                  <TableCell>Basic Coverage</TableCell>
                  <TableCell>$100/month</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Health Insurance Plan 2</TableCell>
                  <TableCell>Description of Health Insurance Plan 2</TableCell>
                  <TableCell>Comprehensive Coverage</TableCell>
                  <TableCell>$150/month</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Health Insurance Plan 3</TableCell>
                  <TableCell>Description of Health Insurance Plan 3</TableCell>
                  <TableCell>Family Coverage</TableCell>
                  <TableCell>$200/month</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Health Insurance Plan 4</TableCell>
                  <TableCell>Description of Health Insurance Plan 4</TableCell>
                  <TableCell>Senior Citizen Coverage</TableCell>
                  <TableCell>$120/month</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Health Insurance Plan 5</TableCell>
                  <TableCell>Description of Health Insurance Plan 5</TableCell>
                  <TableCell>Individual Coverage</TableCell>
                  <TableCell>$80/month</TableCell>
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
