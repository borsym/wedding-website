import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "./Button";
import { GiCutDiamond } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import "./Pricing.css";

const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-directino: column;
  justify-content: center;
  background: linear-gradient(45deg, #ffa07a 40%, #dc143c 100%);
`;
const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const PricingHeading = styled.h1`
  color: #f8f8ff;
  margin-bottom: 24px;
`;
const PricingContainerFeatures = styled.ul`
  margin: 16px 0 28px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-bottom: 8px;
  }
`;
const PricingContainer = styled.div`
  display: flex;
  justify-conent: center;
  align-content: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-conent: center;
    align-items: center;
    width: 100%;
  }
`;
const PricingContainerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;

  h3 {
    margin-bottom: 3px;
    font-size: 36px;
  }
  h4 {
    font-size: 22px;
  }
  p {
    font-size: 14px;
    margin-bottom: 22px;
  }
`;
const Icon = styled.div`
  margin: 24px 0;
`;
//Icon

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <PricingSection id="offers">
        <PricingWrapper>
          <PricingHeading>Packages</PricingHeading>

          <PricingContainer>
            <Link to="/sing-up" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <FaFire />
                </Icon>
                <h3>Standard</h3>
                <h4>something</h4>
                <p>One camerman</p>
                <PricingContainerFeatures>
                  <li>Two camera</li>
                  <li>Wedding highlights</li>
                  <li>64GB pendrive</li>
                  <li>Gift Box</li>
                  <li>Full HD</li>
                </PricingContainerFeatures>
                <Button big="true" primary="true">
                  Choose Package
                </Button>
              </PricingContainerCardInfo>
            </Link>

            <Link to="/sing-up" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <GiCutDiamond />
                </Icon>
                <h3>Diamond</h3>
                <h4>$29.00</h4>
                <p>Two camerman</p>
                <PricingContainerFeatures>
                  <li>Includes standard</li>
                  <li>Aerial shots</li>
                  <li>Fast delivery</li>
                  <li>Pre-photography</li>
                </PricingContainerFeatures>
                <Button big="true" primary="true">
                  Choose Package
                </Button>
              </PricingContainerCardInfo>
            </Link>

            <Link to="/sing-up" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <GiBigDiamondRing />
                </Icon>
                <h3>Gold</h3>
                <h4>$900.00</h4>
                <p>One camerman</p>
                <PricingContainerFeatures>
                  <li>Includes standard</li>
                  <li>Aerial shots</li>
                  <li>Fast delivery</li>
                  <li>Pre-photography</li>
                  <li>Pre-photography</li>
                </PricingContainerFeatures>
                <Button /* big="false" */ primary="true">Choose Package</Button>
              </PricingContainerCardInfo>
            </Link>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
