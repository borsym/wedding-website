import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "./Button";
import { GiCutDiamond } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import PricingBg from "../images/pricing4.jpg";
import { useTranslation } from "react-i18next";
import "./Pricing.css";
// background: linear-gradient(45deg, #ffa07a 40%, #dc143c 100%);
const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-directino: column;
  justify-content: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${PricingBg}) no-repeat center;
  object-fit: cover;
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
  const { t, i18n } = useTranslation();
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <PricingSection id="offers">
        <PricingWrapper>
          <PricingHeading>Packages</PricingHeading>

          <PricingContainer>
            <Link to="/contact" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <FaFire />
                </Icon>
                <h3>{t("Standard")}</h3>
                <h4>{t("something")}</h4>
                <p>{t("One camerman")}</p>
                <PricingContainerFeatures>
                  <li>{t("Two camera")}</li>
                  <li>{t("Wedding highlights")}</li>
                  <li>{t("64GB pendrive")}</li>
                  <li>{t("Gift Box")}</li>
                  <li>{t("Full HD")}</li>
                </PricingContainerFeatures>
                <Button medium="true" primary="true">
                  {t("Choose Package")}
                </Button>
              </PricingContainerCardInfo>
            </Link>

            <Link to="/contact" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <GiCutDiamond />
                </Icon>
                <h3>{t("Diamond")}</h3>
                <h4>{t("something")}</h4>
                <p>{t("Two camerman")}</p>
                <PricingContainerFeatures>
                  <li>{t("Includes standard")}</li>
                  <li>{t("Aerial shots")}</li>
                  <li>{t("Fast delivery")}</li>
                  <li>{t("Pre-photography")}</li>
                </PricingContainerFeatures>
                <Button medium="true" primary="true">
                  {t("Choose Package")}
                </Button>
              </PricingContainerCardInfo>
            </Link>

            <Link to="/contact" className="pricing_container-card">
              <PricingContainerCardInfo>
                <Icon>
                  <GiBigDiamondRing />
                </Icon>
                <h3>{t("Gold")}</h3>
                <h4>{t("something")}</h4>
                <p>{t("One camerman")}</p>
                <PricingContainerFeatures>
                  <li>{t("Includes standard")}</li>
                  <li>{t("Aerial shots")}</li>
                  <li>{t("Fast delivery")}</li>
                  <li>{t("Pre-photography")}</li>
                </PricingContainerFeatures>
                <Button medium="true" primary="true">
                  {t("Choose Package")}
                </Button>
              </PricingContainerCardInfo>
            </Link>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
