import React from "react";
import styled from "styled-components";
// Components
import TeamTable from "../Elements/TeamTable";

export default function Team() {
  return (
    <Wrapper id="team">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Meet the Team</h1>
            <p className="font13">
            Our team has come together to create FinVise, a testament to our collective dedication and ingenuity.
            <br /> Despite being in the early stages of our careers, our diverse backgrounds in finance, technology, and design have enabled us to craft a user-friendly platform that aims to redefine how individuals approach financial planning.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <TeamTable
                // icon="roller"
                price="Ayush Singh"
                title="Member-1"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga, nam consectetur iure quae qui quaerat laborum repudiandae quidem quisquam illo suscipit nesciunt, dolorum dolores cumque aut omnis, laudantium quas corrupti sit nobis esse vel vero? Commodi, dolores voluptatum maiores perferendis corporis, optio itaque dolor, fuga veritatis praesentium natus aliquam?"
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <TeamTable
                icon="monitor"
                price="Yamini Tapde"
                title="Member-2"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga, nam consectetur iure quae qui quaerat laborum repudiandae quidem quisquam illo suscipit nesciunt, dolorum dolores cumque aut omnis, laudantium quas corrupti sit nobis esse vel vero? Commodi, dolores voluptatum maiores perferendis corporis, optio itaque dolor, fuga veritatis praesentium natus aliquam?"
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <TeamTable
                icon="browser"
                price="Sarvesh Varade"
                title="Member-3"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga, nam consectetur iure quae qui quaerat laborum repudiandae quidem quisquam illo suscipit nesciunt, dolorum dolores cumque aut omnis, laudantium quas corrupti sit nobis esse vel vero? Commodi, dolores voluptatum maiores perferendis corporis, optio itaque dolor, fuga veritatis praesentium natus aliquam?"
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <TeamTable
                icon="browser"
                price="Nilesh Shirude"
                title="Guide"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga, nam consectetur iure quae qui quaerat laborum repudiandae quidem quisquam illo suscipit nesciunt, dolorum dolores cumque aut omnis, laudantium quas corrupti sit nobis esse vel vero? Commodi, dolores voluptatum maiores perferendis corporis, optio itaque dolor, fuga veritatis praesentium natus aliquam?"
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;