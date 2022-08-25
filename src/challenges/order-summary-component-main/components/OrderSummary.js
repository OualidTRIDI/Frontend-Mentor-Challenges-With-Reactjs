import styled from "styled-components";

import backgroundDesktop from "../images/pattern-background-desktop.svg";
import backgroundMobile from "../images/pattern-background-mobile.svg";
import illustrationHero from "../images/illustration-hero.svg";
import IconMusic from "../images/icon-music.svg";

const Body = styled.div`
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    background-color: hsl(225, 100%, 94%);
    min-height: 100vh;
  `;

const Background = styled.div`
  background: url(${backgroundDesktop}) no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

    @media screen and (max-width: 375px) {
        background: url(${backgroundMobile}) no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

const OrderSummaryComponent = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 1fr 2fr;
  max-width: 350px;
  border-radius: 20px;
  box-shadow: 1px 14px 49px 6px rgba(56, 41, 224, 0.29);
`;

const OrderSummaryImg = styled.div`
  background: url(${illustrationHero}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
`;

const OrderSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px;
`;

const OrderSummaryTitle = styled.div`
  color: hsl(223, 47%, 23%);
  font-weight: 900;
  font-size: 1.5em;
`;

const OrderSummaryParagraph = styled.div`
  color: hsl(224, 23%, 55%);
  text-align: center;
`;

const AnnualPlanContainer = styled.div`
  background-color: hsl(225, 100%, 98%);
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const AnnualPlanIcon = styled.div`
  background: url(${IconMusic});
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  border-radius: 50px;

  grid-row: 1/3;
`;

const AnnualPlanTitle = styled.div`
  align-self: flex-end;
  color: hsl(223, 47%, 23%);
  font-weight: 900;
`;

const AnnualPlanPrice = styled.div`
  color: hsl(224, 23%, 55%);
`;

const AnnualPlanChange = styled.div`
  grid-column: 3/4;
  grid-row: 1/3;
  align-self: center;
  color: hsl(245, 75%, 52%);
  text-decoration: underline;

  &:hover{
    text-decoration: none;
    cursor: pointer;
  }
`;

const ProceedPayment = styled.button`
  background-color: hsl(245, 75%, 52%);
  color: #fff;
  border-style: none;
  border-radius: 10px;
  width: 100%;
  padding: 15px;
  box-shadow: 1px 9px 18px -2px rgba(56, 41, 224, 0.64);

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const CancelOrder = styled.button`
  background-color: #fff;
  color: hsl(224, 23%, 55%);
  border-style: none;
  font-weight: 700;

  &:hover {
    color: hsl(223, 47%, 23%);
    cursor: pointer;
  }
`;

const OrderSummary = () => {
  return (
    <Body>
      <Background>
        <OrderSummaryComponent>
          <OrderSummaryImg />
          <OrderSummaryContent>
            <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
            <OrderSummaryParagraph>
              You can now listen to millions of songs, audiobooks, and podcast on
              any device anywhere you like!
            </OrderSummaryParagraph>
            <AnnualPlanContainer>
              <AnnualPlanIcon />
              <AnnualPlanTitle>Annual Plan</AnnualPlanTitle>
              <AnnualPlanPrice>$59.99/year</AnnualPlanPrice>
              <AnnualPlanChange>Change</AnnualPlanChange>
            </AnnualPlanContainer>
            <ProceedPayment>Proceed to Payment</ProceedPayment>
            <CancelOrder>Cancel Order</CancelOrder>
          </OrderSummaryContent>
        </OrderSummaryComponent>
      </Background>
    </Body>
  )
}

export default OrderSummary;