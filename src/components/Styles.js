import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#fff",
  theme: "#be185d",
  light1: "#f3f4f6",
  light2: "#e5e7eb",
  dark1: "#1f2937",
  dark2: "#4b5563",
  dark3: "#9ca3af",
  red: "#dc2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledInput = styled.input`
  padding: 15px;
  width: 280px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.light2};
  border: 0;
  outline: none;
  display: block;
  margin: 5px auto 10px auto;
  transition: 0.3s ease-in-out;
  ${(props) => props.invalid && `border: 1px solid ${colors.red};`};

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 10px;
  color: ${colors.theme};
  transition: 0.3s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledIcons = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 20px;
  top: 35px;
  ${(props) => props.right && `right: 15px;`}
  ${(props) => !props.right && `left: 15px;`}
`;
