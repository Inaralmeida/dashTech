
import SectionDemo from "../../Components/SectionDemo/SectionDemo";
import SectionHome from "../../Components/SectionHome/SectionHome";
import SectionResults from "../../Components/SectionResults/SectionResults";
import * as S from "./home.styles";

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>Store Tech</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#resultados">resultados</a>
          <a href="#demo">Demostração</a>
          <a href="/login/newuser">Me Inscrever</a>
          <a href="/login">Entrar</a>
        </nav>
      </S.Header>

      <S.Content>
        <section id="home">
          <SectionHome />
        </section>
        <section id="resultados">
          <SectionResults />
        </section>
        <section id="demo">
          <SectionDemo />
        </section>
      </S.Content>
    </S.Container>
  );
};

export default Home;
