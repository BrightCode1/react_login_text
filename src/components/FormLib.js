import { useState } from "react";
import { useField } from "formik";
import { StyledInput, StyledLabel, StyledIcons } from "./Styles";
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
      <StyledInput {...field} {...props} />
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
    </div>
  );
};
