const Reducer = (state: any, action: any)=>{
    switch(action.type){
        case 'LOADING':
            return{
                ...state,
                loading: true
            }
        case 'ADD_NEW_DATA_PERSON':
            return{
                ...state,
                user:{
                    ...state.cliente,
                    pessoal: action.payload
                }
            }
        case 'ADD_NEW_DATA_ADDRESS':
            return{
                ...state,
                cliente:{
                    ...state.cliente,
                    endereco: action.payload
                }
            }
        case 'ADD_NEW_DATA_LOGON':
            return{
                ...state,
                cliente:{
                    ...state.cliente,
                    logon: action.payload
                }
            }
        case 'LOGIN':
            return{
                ...state,
                cliente:{
                    logon: action.payload
                }
            }
        case 'NEW_PRODUCT':
            return{
                ...state,
                produto: action.payload
            }
        case 'SEND_PRODUCT':
            console.log('fui chamado')
            return{
                ...state,
                produto: state.produto
            }
        default:
            return state
    }
}

export default Reducer