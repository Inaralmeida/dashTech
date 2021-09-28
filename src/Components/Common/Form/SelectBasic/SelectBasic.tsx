import React from "react";
import styled from "styled-components";

interface ISelectBasicProps {
  value: string;
  label: string,
  disabled?: boolean,
  options: {
    id: number;
    name: string;
  }[];
  onchange?: (e: any) => void;
}

const Select = styled.select`
  width: 100%;
  height: 100%;
  outline: 0;
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.gray};
  color: black;
  cursor: pointer;
  :disabled{
    cursor: not-allowed;
  }
`;

const SelectBasic = ({ value, options, onchange, disabled = false, label}: ISelectBasicProps) => {
  return <Select name={value} onChange={onchange} disabled={disabled}>
      <option value={undefined}>{label}</option>
      {
          options.map((option)=>{
              return (
                  <option 
                  key={option.id}
                  value={option.id}
                  >{option.id}</option>
              )
          })
      }
  </Select>;
};

export default SelectBasic;
