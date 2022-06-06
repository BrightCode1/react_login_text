import { useState } from "react";
import { useField } from "formik";
import { StyledInput, StyledLabel, StyledIcons, ErrorMessage } from "./Styles";
import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {props.type !== "password" && (
        <StyledInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      {props.type === "password" && (
        <StyledInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={showPassword ? "text" : "password"}
        />
      )}
      <StyledIcons>{icon}</StyledIcons>
      {props.type === "password" && (
        <StyledIcons
          style={{
            cursor: "pointer",
          }}
          onClick={() => setShowPassword(!showPassword)}
          right
        >
          {showPassword && <FiEye />}
          {!showPassword && <FiEyeOff />}
        </StyledIcons>
      )}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : (
        <ErrorMessage
          style={{
            visibility: "hidden",
          }}
        >
          .
        </ErrorMessage>
      )}
    </div>
  );
};
