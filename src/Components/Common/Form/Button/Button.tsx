import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

interface IButtonProps {
  type: "success" | "warning" | "outline" | "filled";
  text?: string;
  size: number;
  disabled?: boolean;
  onclick: (e: any) => void;
  children?: React.ReactNode;
}

const ButtonStyle = styled.button`
  height: 50px;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = ({
  type,
  text,
  size,
  onclick,
  disabled = false,
  children,
}: IButtonProps) => {
  const theme = useContext(ThemeContext);

  const handleStyle = () =>{
    let style = {};
    switch (type) {
      case "success":
        style = {
          width: `${size}%`,
          color: theme.white,
          backgroundColor: theme.success,
          border: `1px solid ${theme.success}`,
        };
        return style;
      case "warning":
        style = {
          width: `${size}%`,
          color: theme.white,
          backgroundColor: theme.warning,
          border: `1px solid ${theme.warning}`,
        };
        return style;
      case "outline":
        style = {
          color: theme.primary,
          backgroundColor: theme.white,
          width: `${size}%`,
          border: `1px solid ${theme.primary}`,
        };
        return style;
      case "filled":
        style = {
          color: theme.white,
          backgroundColor: theme.primary,
          width: `${size}%`,
          border: `1px solid ${theme.primary}`,
        };
        return style;
      default:
        break;
    }
    return style
  }
  
  const style = handleStyle()

  return (
    <ButtonStyle
      style={style}
      className={type}
      disabled={disabled}
      onClick={onclick}
    >
      {text || children}
    </ButtonStyle>
  );
};

export default Button;
