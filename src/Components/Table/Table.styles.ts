import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  > thead {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid ${(p) => p.theme.gray};
  }

  > tbody {
    > tr {
      height: 50px;

      > td {
        height: 50px;
        padding: 0 15px;
        text-align: center;
        border-bottom: 1px solid ${(p) => p.theme.gray};

        > span {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #333;
        }
      }
      > .name-left {
        text-align: start;
        width: 40%;
      }
      /* > .price-left{
        text-align: start;
      } */

      :hover {
        background: ${(p) => p.theme.shadow};
      }
    }
  }
`;

export const Th = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  > div{
    height: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2px;

    > span{
      /* border: 1px solid; */
      height: 15px;
    margin-top: -5px;

    }
  }
`;
