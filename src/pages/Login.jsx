import {
  StyledFormButton,
  StyledFormArea,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
} from "./../components/Styles";

import { TextInput } from "../components/FormLib";
import { Formik, Form } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  return (
    <div>
      <StyledFormArea>
        <StyledTitle size={30} color={colors.theme}>
          Member Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid Email Address")
              .required("This field is required"),
            password: Yup.string()
              .min(8, "Password Should be greater than 8 letters")
              .required("This field is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
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
                {!isSubmitting && (
                  <StyledFormButton type="submit" onClick={() => {}}>
                    Login
                  </StyledFormButton>
                )}
                {isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color={colors.theme}
                    height={30}
                    width={60}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText size={16}>
          Don't have an account? <TextLink to="/signup">Sign Up</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
  );
};

export default Login;
