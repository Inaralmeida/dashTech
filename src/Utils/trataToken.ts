export const trataToken= () =>{
    const storage = localStorage.getItem('token')
    if(typeof storage === 'string'){
        const split = storage.split('-')
        return split[0]
    }
}