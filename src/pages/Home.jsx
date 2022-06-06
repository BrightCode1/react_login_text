import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";

const Home = () => {
  return (
    <div>
      <StyledTitle size={65}>Welcome to Quelib</StyledTitle>
      <StyledSubTitle size={27}>
        A place to share your knowledge with the world
      </StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Sign up</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
