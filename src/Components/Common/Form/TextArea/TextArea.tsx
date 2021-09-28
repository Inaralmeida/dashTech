import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  resize: none;
  outline: none;
  border: 1px solid ${p => p.theme.gray};
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    width: 10px;
    background: ${(p) => p.theme.background};
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background: ${(p) => p.theme.secundary};
  }
`;
interface ITextAreaProps {
  value: string;
  onchange: (e: any) => void;
  name: string;
  placeholder: string;
}

const TextArea = ({ value, onchange, name, placeholder }: ITextAreaProps) => {
  return (
    <Textarea
      value={value}
      onChange={onchange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
