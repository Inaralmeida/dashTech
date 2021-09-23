
export const validaInputs = (type: string, value: any)=>{
    let error = false
    switch(type){
        case 'name':
            console.log(value.length)
            if(value.length < 3 || value === ''){
                console.log('oi')
                error = true
            }else{
                error =false
            }
        return error
        case 'senha':
            if(value.length < 8 ){
                return true
            }else{
                return false
            }
        case 'email':
            if(value.indexOf('@') === -1 ){
                return true
            }else{
                return false
            }
        default: 
        return error
    }

    

    


}