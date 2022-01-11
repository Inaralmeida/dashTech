import * as S from "./Aside.styles";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaUserTie, FaBox, FaCashRegister } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { useParams } from "react-router";
import { trataToken } from "../../Utils/trataToken";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/img/LogoDark2.png";

interface IAsideProps {
  asideView: boolean;
}

const Aside = ({ asideView }: IAsideProps) => {
  const parms = useParams();
  const title: any = Object.values(parms)[0];
  const token = trataToken();

  return (
    <S.Container>
      <S.Logo>
        {asideView ? (
          <>
            <span>OCTOPLANNING</span>
          </>
        ) : (
          <img src={LogoDark} alt="Octaplanning Logo" />
        )}
      </S.Logo>

      <nav>
        <Link
          to="/dashboard/home"
          className={title === "home" ? " activeTab " : "Link"}
        >
          {asideView ? (
            <>
              <MdDashboard />
              <span id="home">Dashboard</span>
            </>
          ) : (
            <MdDashboard />
          )}
        </Link>
        {token === "adm" || token === "gerente" ? (
          <>
            <Link
              to="/dashboard/entradas"
              className={title === "entradas" ? " activeTab " : "Link"}
            >
              {asideView ? (
                <>
                  <BsGraphUp />

                  <span>Receitas</span>
                </>
              ) : (
                <BsGraphUp />
              )}
            </Link>
            <Link
              to="/dashboard/saidas"
              className={title === "saidas" ? " activeTab " : "Link"}
            >
              {asideView ? (
                <>
                  <BsGraphDown />
                  <span>Despesas</span>
                </>
              ) : (
                <BsGraphDown />
              )}
            </Link>

            <Link
              to="/dashboard/clientes"
              className={title === "clientes" ? " activeTab " : "Link"}
            >
              {asideView ? (
                <>
                  <ImUsers />
                  <span>Clientes</span>
                </>
              ) : (
                <ImUsers />
              )}
            </Link>
            <Link
              to="/dashboard/funcionarios"
              className={title === "funcionarios" ? " activeTab " : "Link"}
            >
              {asideView ? (
                <>
                  <FaUserTie />
                  <span>Funcionarios</span>
                </>
              ) : (
                <FaUserTie />
              )}
            </Link>

            <Link
              to="/dashboard/produtos"
              className={title === "produtos" ? " activeTab " : "Link"}
            >
              {asideView ? (
                <>
                  <FaBox />
                  <span>Produtos</span>
                </>
              ) : (
                <FaBox />
              )}
            </Link>
          </>
        ) : (
          <Link
            to="/dashboard/produtos"
            className={title === "produtos" ? " activeTab " : "Link"}
          >
            {asideView ? (
              <>
                <FaBox />
                <span>Produtos</span>
              </>
            ) : (
              <FaBox />
            )}
          </Link>
        )}
      </nav>
    </S.Container>
  );
};

export default Aside;
