import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    > header{
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

        > p{
            height: 100%;
            width: 180px;
            padding: 5px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${p => p.theme.secundary};
            border: 1px solid ${p => p.theme.secundary};
            cursor: pointer;
        }
        
        > .link{
            width: 10%;
            height: 100%;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: ${p=> p.theme.white};
            border: 1px solid ${p=> p.theme.white};
            background: ${p=> p.theme.primary};
            text-align: center;
            border-radius: 10px;
            font-size: 16px;
            transition: all .7s;

            :hover{
            background: ${p=> p.theme.tertiary};
            }
        }
    }
`

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    background: ${p => p.theme.white};
    top: 207px;
    right: 41px;
    width: 180px;
    border-radius: 0 0 15px 15px;
    box-shadow: 2px 2px 2px ${p => p.theme.gray};

    > li{
    padding: 0 10px;

        width: 100%;
        list-style: none;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        :hover{
            background: ${p=> p.theme.shadow};
        }
    }
`

export const Content = styled.div`
    width: 100%;
    height: 85%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    
`