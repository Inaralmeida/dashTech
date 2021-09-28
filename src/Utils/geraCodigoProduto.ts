export const geraCodigoProduto = () =>{
    const numero = Math.ceil(Math.random() * (99999 - 10000) + 10000)
    return numero

}