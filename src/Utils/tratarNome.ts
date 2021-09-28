export const primeiroEUltimoNome = (name: string)=>{
    const espaco = name.split(' ')
    const tamanho = espaco.length
    console.log(espaco)
    return espaco[0] + ' ' + espaco[tamanho - 1]
}
export const primeiroNome = (name: any)=>{
    const espaco = name.split(' ')
    return espaco[0]
}

