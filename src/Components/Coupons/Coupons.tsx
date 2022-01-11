import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { APIState } from "../../Context/ApiContext/ApiContext";
import { api } from "../../Services/api";
import { geraCodigoProduto } from "../../Utils/geraCodigoProduto";
import Button from "../Common/Form/Button/Button";
import ModalAlert from "../Common/ModalAlert/ModalAlert";
import Notificacao from "../Common/Notificacao/Notificacao";
import * as S from "./Coupons.styles";
const Coupons = () => {
  const {
    state: {
      api: { cupons },
    },
    dispatch,
  } = useContext(APIState);
  const cupomInicial = {
    id: geraCodigoProduto(),
    nome: "",
    desconto: 0,
  };
  const [isEdit, setIsEdit] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [valueInputCod, setValueInputCod] = useState("");
  const [valueInputName, setValueInputName] = useState("");
  const [cupomDaVez, setCupomDaVez] = useState(cupomInicial);
  const [cuponsRender, setCuponsRender] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [notificacaoConfig, setNotificacaoConfig] = useState<any>({
    isActive: false,
    text: "",
    type: "",
  });
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState([]);

  const headers = ["Código", "Nome", "Percentual", "Configurações"];

  const setApi = (value: boolean) => {
    dispatch({
      type: "RELOADING",
      payload: value,
    });
  };

  const handleCancel = () => {
    setError(false);
    setIsEdit(false);
    setIsNew(false);
    setCupomDaVez(cupomInicial);
  };

  const handleSave = () => {
    if (cupomDaVez.desconto === 0 || cupomDaVez.nome.length < 3) {
      setError(true);
    } else {
      const data = {
        ...cupomDaVez,
        desconto: cupomDaVez.desconto / 100,
      };

      if (isEdit) {
        api.patch(`/cupons/${data.id}`, data).then((response) => {
          console.log(response.status);

          if (response.status === 200) {
            setNotificacaoConfig({
              isActive: true,
              text: "Cupom Alterado com sucesso",
              type: "success",
            });

            setApi(true);
            console.log("produto alterado com sucesso");
            setApi(false);
          } else {
            setNotificacaoConfig({
              isActive: true,
              text: "Falha ao alterar cupom",
              type: "warning",
            });
          }
        });
      } else {
        api.post(`/cupons`, data).then((response) => {
          if (response.status === 201) {
            setApi(true);
            setNotificacaoConfig({
              isActive: true,
              text: "Cupom Adicionado com sucesso",
              type: "success",
            });

            setApi(false);
          } else {
            setNotificacaoConfig({
              isActive: true,
              text: "Falha ao adicionar cupom",
              type: "warning",
            });
          }
        });
      }
      handleCancel();
    }
  };

  const handleSort = (by: any, type: any) => {
    let data: any = [];
    switch (by) {
      case "Nome":
        if (type === "up") {
          data = cupons.sort((a: any, b: any) => {
            return a.nome < b.nome ? 1 : -1;
          });
          setSortBy(data);
        } else {
          data = cupons.sort((a: any, b: any) => {
            return a.nome > b.nome ? 1 : -1;
          });
          setSortBy(data);
        }
        break;
      case "Percentual":
        if (type === "up") {
          data = cupons.sort((a: any, b: any) => {
            return a.desconto < b.desconto ? 1 : -1;
          });
          setSortBy(data);
        } else {
          data = cupons.sort((a: any, b: any) => {
            return a.desconto > b.desconto ? 1 : -1;
          });
          setSortBy(data);
        }
        break;

      default:
        break;
    }
  };

  const handleDelete = () => {
    api.delete(`/cupons/${cupomDaVez.id}`).then((response) => {
      if (response.status === 200) {
        setNotificacaoConfig({
          isActive: true,
          text: "Produto excluido com sucesso",
          type: "success",
        });
        setApi(true);
      } else {
        setNotificacaoConfig({
          isActive: true,
          text: "Falha ao exclui produto",
          type: "error",
        });
      }
    });

    handleCancel();
    setModalActive(false);
    setApi(false);
  };

  //funções de filtro
  const handleFilteredName = () => {
    if (valueInputName.length > 0) {
      const filtereds = cupons.filter((product: any) => {
        return product.nome
          .toUpperCase()
          .includes(valueInputName.toUpperCase());
      });
      setCuponsRender(filtereds);
    } else {
      setCuponsRender(cupons);
    }
  };
  const handleFilteredCod = () => {
    if (valueInputCod.length > 0) {
      const filtereds = cupons.filter((product: any) => {

        return String(product.id).includes(valueInputCod);
      });
      setCuponsRender(filtereds);
    } else {
      setCuponsRender(cupons);
    }
  };

  //atualização da tabela de a cordo com o filtro
  useEffect(() => {
    handleFilteredCod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputCod]);
  useEffect(() => {
    handleFilteredName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputName]);


  useEffect(() => {
    setCuponsRender(cupons);
  }, [cupons]);
  useEffect(() => {
    if (sortBy.length > 0) {
      setCuponsRender(sortBy);
      setSortBy([]);
    }
  }, [sortBy]);

  return (
    <S.Container>
      <header>
        
      <fieldset>
          <div className="input">
            <label className={valueInputCod.length > 0 ? "active" : ""}>
              Código
            </label>
            <input
              required
              type="text"
              value={valueInputCod}
              onChange={({ target }) => setValueInputCod(target.value)}
            />
          </div>
          <div className="input">
            <label className={valueInputName.length > 0 ? "active" : ""}>
              Nome
            </label>
            <input
              required
              type="text"
              value={valueInputName}
              onChange={({ target }) => setValueInputName(target.value)}
            />
          </div>
        </fieldset>
        
        <Button
          type="filled"
          text="Adicionar cupom"
          size={15}
          onclick={() => {
            setIsNew(true);
            setIsEdit(false);
            setCupomDaVez(cupomInicial);
          }}
        />
      </header>
      <S.Content>
        <S.Table>
          <thead>
            <tr>
              {headers.map((head) => {
                return (
                  <th key={head}>
                    <S.ThContent>
                      {head}

                      {head === "Nome" || head === "Percentual" ? (
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
                    </S.ThContent>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {cuponsRender.map((cupom: any) => {
              return (
                <tr key={cupom.nome}>
                  <td>{cupom.id}</td>
                  <td>{cupom.nome}</td>
                  <td>
                    <p>{cupom.desconto * 100}%</p>
                  </td>
                  <td>
                    <span>
                      <AiFillEdit
                        cursor="pointer"
                        onClick={() => {
                          setCupomDaVez({
                            id: cupom.id,
                            nome: cupom.nome,
                            desconto: cupom.desconto * 100,
                          });
                          setIsEdit(true);
                          setIsNew(false);
                        }}
                      />
                      <AiFillDelete
                        cursor="pointer"
                        onClick={() => {
                          setCupomDaVez(cupom);
                          setModalActive(true);
                        }}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>

        <S.Config isEdit={isEdit || isNew}>
          <div>
            <header>{isEdit ? "Editar" : isNew ? "Adicionar" : ""}</header>

            <main>
              <fieldset>
                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  value={cupomDaVez.nome}
                  disabled={isEdit ? false : isNew ? false : true}
                  onChange={({ target }) =>
                    setCupomDaVez({ ...cupomDaVez, nome: target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor="">Percentual</label>
                <input
                  type="number"
                  value={cupomDaVez.desconto}
                  disabled={isEdit ? false : isNew ? false : true}
                  onChange={({ target }) =>
                    setCupomDaVez({
                      ...cupomDaVez,
                      desconto: parseInt(target.value),
                    })
                  }
                />
              </fieldset>

              {error ? <p className="error">Preencha todos os campos</p> : ""}
            </main>

            <footer>
              <Button
                type={isEdit || isNew ? "warning" : "disabled"}
                size={35}
                text="Cancelar"
                onclick={handleCancel}
              />
              <Button
                type={isEdit || isNew ? "success" : "disabled"}
                size={35}
                text="Salvar"
                onclick={handleSave}
              />
            </footer>
          </div>
        </S.Config>
      </S.Content>

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

      {notificacaoConfig.isActive && (
        <Notificacao
          type={notificacaoConfig.type}
          text={notificacaoConfig.text}
          setActive={() =>
            setNotificacaoConfig({ ...notificacaoConfig, isActive: false })
          }
        />
      )}
    </S.Container>
  );
};

export default Coupons;
