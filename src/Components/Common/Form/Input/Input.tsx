import { TextField } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox/Checkbox";
import MessageError from "../MessageError/MessageError";

interface IInputProps {
  name: string;
  value: string | number;
  placeholder: string;
  type?: string;
  onchange: (e: any) => void;
  messageError: string;
  error: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Input = ({
  name,
  value,
  onchange,
  placeholder,
  type = "text",
  error,
  messageError,
}: IInputProps) => {
    const [viewPassord, setViewPassord] = useState<any>(false)

  return (
    <Container>
      <TextField
        id={name}
        fullWidth
        type={type === 'password' ? viewPassord ? 'text' :  'password' : type}
        required
        color="primary"
        name={name}
        label={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        variant="outlined"
        error={error}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {type === 'password' && <Checkbox
        value={viewPassord}
        onchange={()=> setViewPassord(!viewPassord)}
        name='viewPassword'
        label='Mostrar senha'/>  
    }
      {error && <MessageError message={messageError} />}
    </Container>
  );
};

export default Input;
