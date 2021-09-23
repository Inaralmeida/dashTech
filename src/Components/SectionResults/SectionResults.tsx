import React from "react";
import * as S from "./SectionResults.styles";
import dash from "../../assets/img/dash1.svg";
import money from "../../assets/img/money.svg";
import plataform from "../../assets/img/plataforms.svg";
const SectionResults = () => {
  return (
    <S.Container>
      <div>
        <img src={dash} alt="foto de dashboard" />
        <p>
          Veja detalhadamente todas as transações, adicione e edite prodtudos,
          acompanhe os lucros do seu E-commerce
        </p>
      </div>
      <div>
        <img src={money} alt="investir e poupar dinheiro" />
        <p>
          Receba dicas sobre a melhor forma de investir e poupar seu dinheiro
          para que alcance seus objetivos
        </p>
      </div>
      <div>
        <img src={plataform} alt="mult Plataforma" />
        <p>
          E o melhor de tudo, tenha acesso a qualquer hora e de qualquer lugar
        </p>
      </div>
    </S.Container>
  );
};

export default SectionResults;
