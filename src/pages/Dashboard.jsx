import React from "react";
import {
  StyledTitle,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "../components/Styles";

const Dashboard = () => {
  return (
    <div>
      <StyledFormArea bg={colors.dark1}>
        <StyledTitle size={35}>Welcome, User</StyledTitle>
        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default Dashboard;
