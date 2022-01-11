import styled from "styled-components";

interface IConfigProps {
  isEdit: boolean;
}
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  margin: 0 auto;

  > header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > fieldset{
            height: 50px;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 0;


            > .input{
                height: 50px;
                position: relative;

                > input{
                    border: 0;
                    height: 40px;
                    border-bottom: 2px solid ${p => p.theme.black};
                    padding-left: 5px;
                    background: transparent;
                }
                
                > label{
                    font-size: 16px;
                    position: absolute;
                    top: 11px;
                    left: 5px;
                    transition: .4s;
                }

                .active{
                    transform: translateY(-24px);
                    font-size: 12px;
                    letter-spacing: 0.8;
                }
            }
        }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Table = styled.table`
  width: 70%;
  height: auto;
  border-collapse: collapse;
  font-size: 16px;

  > tbody {
    > tr {
      height: 50px;
      > td {
        padding: 0 15px;
        text-align: center;
        border-bottom: 1px solid ${(p) => p.theme.gray};

        > span {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #333;
        }
      }

      :hover {
        background: ${(p) => p.theme.shadow};
      }
    }
  }
`;

export const ThContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  > div {
    height: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2px;

    > span {
      /* border: 1px solid; */
      height: 15px;
      margin-top: -5px;
    }
  }
`;

export const Config = styled.div<IConfigProps>`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    border-radius: 15px;
    width: 90%;
    height: 300px;
    background-color: ${(p) => (p.isEdit ? "#fff" : p.theme.shadow)};
    box-shadow: 10px 10px 10px rgba(80, 80, 80, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: ${(p) => (!p.isEdit ? "not-allowed" : "auto")};
    > header {
      width: 100%;
      height: 50px;
      border-radius: 15px 15px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${p => p.theme.white};
      font-weight: bold;
      background-color: ${(p) => (p.isEdit ? p.theme.primary : p.theme.gray)};
    }
    > main {
      padding: 10px;
      width: 100%;
      height: 80%;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      > fieldset {
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        border: none;
        font-weight: bold;
        color: ${(p) => (p.isEdit ? p.theme.black : p.theme.white)};

        > input {
          height: 60%;
          width: 100%;
          cursor: ${(p) => (!p.isEdit ? "not-allowed" : "auto")};
          background-color: ${(p) => (p.isEdit ? '#fff' : p.theme.gray)};
          border: none;
          outline: none;
          border-bottom: 3px solid ${p=> p.theme.gray};
          padding-left: 5px;
        }
      }
    }
    > footer {
      height: 80px;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      
    }
  }
`;
