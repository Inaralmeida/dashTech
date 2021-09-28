import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Container = styled.div`
  width: 25vw;
  height: 50px;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: ${(p) => p.theme.white};
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  box-shadow: -2px 2px 5px rgba(0,0,0,0.5);
`;

interface INotificacaoProps {
  text: string;
  setActive: () => void;
  type: string;
}

const Notificacao = ({ text, setActive, type }: INotificacaoProps) => {
  const theme = useContext(ThemeContext);
  setTimeout(() => {
    setActive();
  }, 5000);

  return (
    <Container
      style={{
        backgroundColor: type === "success" ? theme.success : theme.warning,
      }}
    >
      {text}
      {type === "success" ? <AiOutlineCheckCircle size={20}/> : <AiOutlineCloseCircle size={20} />}
    </Container>
  );
};

export default Notificacao;
