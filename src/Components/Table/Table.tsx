import * as S from "./Table.styles";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { formataValor } from "../../Utils/formataValor";
import ModalAlert from "../Common/ModalAlert/ModalAlert";
import { useContext, useState } from "react";
import { api } from "../../Services/api";
import { APIState } from "../../Context/ApiContext/ApiContext";
import EditarProduto from "../Produtos/EditarProduto/EditarProduto";
import Notificacao from "../Common/Notificacao/Notificacao";

interface ITableProps {
  headers: Array<string>;
  produtos?: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }[];
  handleSort: (by: any, type: any) => void;
}

const Table = ({ headers, produtos, handleSort }: ITableProps) => {
  const { dispatch } = useContext(APIState);
  const [produtoDaVez, setProdutoDaVez] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [editarProduto, setEditarProduto] = useState(false);

  const [notificacaoConfig, setNotificacaoConfig] = useState<any>({
    isActive: false,
    text: "",
    type: "",
  });

  const setApiUpdate = (value: boolean) => {
    dispatch({
      type: "RELOADING",
      payload: value,
    });
  };
  const handleDelete = () => {
    console.log(typeof produtoDaVez);

    api.get(`/produtos/${produtoDaVez}`).then((response) => {
      console.log(response.data);
    });

    api.delete(`/produtos/${produtoDaVez}`).then((response) => {
      if (response.status === 200) {
        setNotificacaoConfig({
          isActive: true,
          text: "Produto excluido com sucesso",
          type: "success",
        });
        setApiUpdate(true);
      } else {
        setNotificacaoConfig({
          isActive: true,
          text: "Falha ao exclui produto",
          type: "error",
        });
      }
    });

    setModalActive(false);
    setApiUpdate(false);
  };

  return (
    <>
      <S.Table>
        <thead>
          <tr>
            {headers.map((head, index) => {
              return (
                <th key={index}>
                  <S.Th>
                    {head}

                    {head === "Nome" ||
                    head === "Preço" ||
                    head === "Estoque" ? (
                      <div>
                        <span>
                          <IoMdArrowDropup
                            cursor="pointer"
                            onClick={() => handleSort(head, "up")}
                          />
                        </span>
                        <span>
                          <IoMdArrowDropdown
                            cursor="pointer"
                            onClick={() => handleSort(head, "down")}
                          />
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </S.Th>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {produtos ? (
            produtos.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td className="name-left ">{product.name}</td>
                  <td className="price-left ">{formataValor(product.price)}</td>
                  <td>{product.amount} uni</td>
                  <td>
                    <GoGraph cursor="pointer" />
                  </td>
                  <td>
                    <span>
                      <AiFillEdit
                        cursor="pointer"
                        onClick={() => {
                          setProdutoDaVez(parseInt(product.id));
                          setEditarProduto(true);
                        }}
                      />
                      <AiFillDelete
                        cursor="pointer"
                        onClick={() => {
                          setProdutoDaVez(parseInt(product.id));
                          setModalActive(true);
                        }}
                      />
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>carregando...</p>
          )}
        </tbody>
      </S.Table>
      {modalActive && (
        <ModalAlert
          title="Cuidado"
          message="Tem certeza que deseja excluir?"
          btnOkText="Excluir"
          btnCancelText="Cancelar"
          btnCancelFunc={() => setModalActive(false)}
          btnOkFunc={handleDelete}
        />
      )}
      {editarProduto && (
        <EditarProduto
          id={produtoDaVez}
          btnCancelFunc={() => setEditarProduto(false)}
        />
      )}
      {notificacaoConfig.isActive && (
        <Notificacao
          type={notificacaoConfig.type}
          text={notificacaoConfig.text}
          setActive={() =>
            setNotificacaoConfig({ ...notificacaoConfig, isActive: false })
          }
        />
      )}
    </>
  );
};

export default Table;
