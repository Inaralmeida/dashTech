import Button from "../Form/Button/Button";
import { IoMdClose } from "react-icons/io";
import * as S from "./ModalAlert.styles";
interface IModalAlertProps {
  message: string;
  btnOkFunc: (e: any) => void;
  btnCancelFunc: () => void;
  btnOkText: string;
  btnCancelText: string;
  title: string;
}

const ModalAlert = ({
  message,
  btnOkFunc,
  btnCancelFunc,
  btnOkText,
  btnCancelText,
  title,
}: IModalAlertProps) => {
  return (
    <S.Container>
      <section>
        <header>
          {title}
          <IoMdClose cursor="pointer" onClick={btnCancelFunc} />
        </header>
        <main>{message}</main>
        <footer>
          <Button
            onclick={btnCancelFunc}
            size={30}
            text={btnCancelText}
            type="filled"
          />
          <Button
            onclick={btnOkFunc}
            size={30}
            text={btnOkText}
            type="warning"
          />
        </footer>
      </section>
    </S.Container>
  );
};

export default ModalAlert;
