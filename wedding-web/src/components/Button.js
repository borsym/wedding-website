import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big, medium }) =>
    big ? "16px 42px" : medium ? " 16px 32px" : "14px 24px"};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big, medium }) => (big ? "20px" : medium ? "18px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")};

  &:hover {
    transform: translateY(-3px);
  }
`;
