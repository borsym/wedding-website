import React from "react";
import styled from "styled-components";
import EmailBg from "../images/email.jpg";
import { Button } from "./Button";
const Email = () => {
  return (
    <EmailContainer id="contact">
      <EmailContent>
        <h1>Contat us</h1>
        <p>Write an email for us</p>
        <from action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="eamil" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              /* display="flex"
              alig-items="center"
              margin-right="-48px" */
              /* display="flex"
              flex-direction="row"
              justify-content="center"
              align-items="center" */

              css={`
                height: 48px;
                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }

                @media screen and (max-width: 480px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Send
            </Button>
          </FormWrap>
        </from>
      </EmailContent>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 850px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1 rem;
  }
  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`;
const FormWrap = styled.div`
input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius 50px;
    border: none;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
}

button {
  
  margin-left: calc(60%/2);
  
}


@media screen (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
}
`;
