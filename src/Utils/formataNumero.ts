export const formataNumero = (value:string) =>{
    
    if(typeof value === 'string' ){
        const stringSplitada = value.split(',')
        return parseFloat(stringSplitada.join('.'))

    }else{
        return parseFloat(value)

    }
}