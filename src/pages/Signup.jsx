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
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";

const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <StyledTitle size={30} color={colors.theme}>
          Member Signup
        </StyledTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            dateOfBirth: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("This field is required"),
            email: Yup.string()
              .email("Invalid Email Address")
              .required("This field is required"),
            dateOfBirth: Yup.date().required("This field is required"),
            password: Yup.string()
              .min(8, "Password Should be greater than 8 letters")
              .required("This field is required"),
            repeatPassword: Yup.string()
              .min(8, "Password Should be greater than 8 letters")
              .required("This field is required")
              .oneOf([Yup.ref("password")], "Paswords does not match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                label="Full Name"
                type="email"
                placeholder="John Doe"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter Email Address"
                icon={<FiMail />}
              />
              <TextInput
                name="dateOfBirth"
                label="Date Of Birth"
                type="date"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                label="Password"
                type="password"
                placeholder="********"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPassword"
                label="Confirm Password"
                type="password"
                placeholder="********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit" onClick={() => {}}>
                    Signup
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
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
  );
};

export default Signup;
