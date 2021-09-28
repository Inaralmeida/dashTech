export const formataValor= (valor: number) =>{
    return valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL' })
}