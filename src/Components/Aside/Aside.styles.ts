import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  > nav {
    margin-top: 15px;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .activeTab {
      border-bottom: 1px solid ${(p) => p.theme.black};
      color: ${(p) => p.theme.white};
      text-decoration: none;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 30px;
      transition: all 1s;
      > span {
        margin-left: 10px;
        font-size: 20px;
      }


    }
    > .Link {
      color: ${(p) => p.theme.background};
      text-decoration: none;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 30px;
      border-bottom: 1px solid ${(p) => p.theme.black};
      transition: all 1s;

      :hover {
        border-bottom: 1px solid ${(p) => p.theme.white};
        color: ${(p) => p.theme.white};
        transform: translateX(10px); 
      }
      > span {
        margin-left: 10px;
        font-size: 20px;
      }
    }
  }
`;
export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
  width: 100%;
  height: 50px;
  color: ${(p) => p.theme.background};
  > img{
    width: 110%;
  }
`;
