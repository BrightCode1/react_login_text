import {
  StyledFormButton,
  StyledFormArea,
  StyledTitle,
  colors,
  ButtonGroup,
} from "./../components/Styles";

import { TextInput } from "../components/FormLib";

import { Formik, Form } from "formik";

import { FiMail, FiLock } from "react-icons/fi";

const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <StyledTitle size={30} color={colors.theme}>
          Member Signup
        </StyledTitle>
        <Formik>
          {() => (
            <Form>
              <TextInput
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter Email Address"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                label="Password"
                type="password"
                placeholder="********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                <StyledFormButton type="submit" onClick={() => {}}>
                  Sign Up
                </StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </div>
  );
};

export default Signup;
