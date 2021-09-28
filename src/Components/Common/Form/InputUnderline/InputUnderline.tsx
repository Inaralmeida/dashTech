import React from "react";
import styled from "styled-components";

const Input = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(p) => p.theme.black};

  > input {
    width: 100%;
    border: 0;
    height: 40px;
    border-bottom: 1px solid ${(p) => p.theme.gray};
    padding-left: 5px;
    background: transparent;
    cursor: text;
  }
  > input:disabled{
    cursor: not-allowed;
  }

  > label {
    font-size: 16px;
    position: absolute;
    top: 11px;
    left: 5px;
    transition: 0.4s;
  }

  .active {
    transform: translateY(-11px);
    font-size: 13px;
    letter-spacing: 0.8;
    font-weight: bold;
  }
`;

interface IInputUnderlineProps {
  value: any;
  onchange: (e: any) => void;
  type?: string;
  disabled?: boolean;
  name: string;
  label: string;
}

const InputUnderline = ({
  value,
  type = "text",
  disabled = false,
  name,
  label,
  onchange,
}: IInputUnderlineProps) => {
  return (
    <Input
    
    >
      <label className={value ? "active" : ""}>{label}</label>
      <input
      required={true}
        type={type}
        value={value}
        name={name}
        onChange={onchange}
        disabled={disabled}
      />
    </Input>
  );
};

export default InputUnderline;
