import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

/** A common button component */
const Button = ({ label }: ButtonProps) => {
  return <button className="rr-shared-button">{label}</button>;
};

export default Button;
