/* eslint-disable use-isnan */
import { useContext, useState } from "react";
import Button from "../../../Common/Form/Button/Button";
import { formataValor } from "../../../../Utils/formataValor";
import { AiOutlineCheck, AiOutlineClose, AiOutlineEdit, AiFillDelete} from "react-icons/ai";

import InputUnderline from "../../../Common/Form/InputUnderline/InputUnderline";
import SelectBasic from "../../../Common/Form/SelectBasic/SelectBasic";
import * as S from "./Informacoes.styles";

const Informacoes = ({ venda, setVenda, setAddItem, addItem }: any) => {
  const [addDesconto, setAddDesconto] = useState(false);
  const [temDesconto, setTemDesconto] = useState(false);
  const [inputDesconto, setInputDesconto] = useState("0");
  const [valores, setValores] = useState({
    valorDesconto: 0,
    valorTotal: 0,
    lucro: 0,
  });

  const onChangeCPF = (e: any) => {
    setVenda({ ...venda, clienteCpf: e.target.value });
  };

  const selectTipoVenda = (e: any) => {
    setVenda({ ...venda, tipoCompra: e.target.value });
    console.log(venda);
  };

  const onChangeDesconto = (e: any) => {
    const { valorLiquido, valorVenda } = venda.valores;
    setInputDesconto(e.target.value);

    const value = parseInt(e.target.value);
    const desconto = value / 100;
    setValores({
      valorDesconto: isNaN(value) ? 0 : valorVenda * desconto,
      valorTotal: isNaN(value) ? 0 : valorVenda - valorVenda * desconto,
      lucro: isNaN(value) ? 0 : valorLiquido - valorVenda * desconto,
    });
  };

  const handleCancelarDesconto = () => {
    setInputDesconto("");
    setAddDesconto(false);
  };

  const handleSaveDesconto = () => {
    setVenda({ ...venda, desconto: parseInt(inputDesconto)});
    setAddDesconto(false);
    setTemDesconto(true)
    setAddItem(!addItem)
  };

  const handleExcluirdesconto = () =>{
    setInputDesconto("0");
    setAddDesconto(false);
    setTemDesconto(false)
    setVenda({ ...venda, desconto: 0});
    setAddItem(!addItem)
  }

  return (
    <S.Container>
      <div className="input">
        <InputUnderline
          label="CPF"
          name="CPF"
          onchange={onChangeCPF}
          value={venda.clienteCpf}
        />
      </div>

      <div className="select">
        <SelectBasic
          label="Tipo de Venda"
          options={[
            { id: "Online", name: "Online" },
            { id: "Fisica", name: "Fisica" },
          ]}
          value={venda.tipoCompra}
          onchange={selectTipoVenda}
        />
      </div>
      {!addDesconto && !temDesconto ? (
        <Button
          text="Adicionar  Desconto"
          onclick={() => setAddDesconto(true)}
          size={70}
          type="outline"
        />
      ) : !addDesconto && temDesconto ? (
        <div className='desconto'>
          <p>Desconto de  {venda.desconto}%</p>
          <div className="buttons">
              <AiFillDelete
                className="iconClose"
                onClick={handleExcluirdesconto}
              />
              <AiOutlineEdit
                className="iconSave"
                onClick={() => setAddDesconto(true)}
              />
            </div>
        </div>
      ) : (
        <S.CalculadoraDesconto>
          <div className="header">
            <p>Calcular desconto</p>
            <div className="buttons">
              <AiOutlineClose
                className="iconClose"
                onClick={handleCancelarDesconto}
              />
              <AiOutlineCheck
                className="iconSave"
                onClick={handleSaveDesconto}
              />
            </div>
          </div>

          <div className="item">
            <p>Desconto(%)</p>
            <input
              type="number"
              value={inputDesconto}
              onChange={onChangeDesconto}
            />
          </div>
          <div className="item">
            <p>Valor do Desconto</p>
            <p>{formataValor(valores.valorDesconto)}</p>
          </div>
          <div className="item">
            <p>Valor Total</p>
            <p>{formataValor(valores.valorTotal)}</p>
          </div>
          <div className="item">
            <p>Lucro</p>
            <p>{formataValor(valores.lucro)}</p>
          </div>
        </S.CalculadoraDesconto>
      )}
    </S.Container>
  );
};

export default Informacoes;
