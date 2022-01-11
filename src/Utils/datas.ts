export const dataAtual = () =>{
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}
export const dataEHora = () =>{
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${day}/${month}/${year} - ${hour}:${minutes}`
}