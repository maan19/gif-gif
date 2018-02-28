const defaultState = {
    uid:undefined
}

const authReducer = (state=defaultState,action) => {
    switch(action.type){
        case 'LOGIN':
            return {
            ...state,
            uid:action.uid
        }
        case 'LOGOUT':
            return {
            ...state,
            uid:undefined
        }
        default:
            return state;
    }
}

export default authReducer;