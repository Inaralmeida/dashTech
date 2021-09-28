const APIReducer = (state: any, action: any) =>{
    switch(action.type){
        case 'LOADING':
            return{
                ...state,
                loading: true
            }
        case 'REQUEST':
            return{
            ...state,
            api: action.payload
        }
        case 'RELOADING':
            return{
                ...state,
                apiUpdate: action.payload
            }
        default:
            return state
    }
}

export default APIReducer