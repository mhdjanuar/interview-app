import * as types from './../types';

const initialState = {
    userId:'',
    isError:false,
    isSuccses:true
}

export default function auth(state = initialState, action){
    switch(action.type){
        case 'SET_USER' : 
            state = {
                ...state
            }
        case 'REGISTER_FULFILLED' : 
            return {
                ...state,
                isError:false,
                isSuccses:true,
                userId: action.payload.data.user.id
            }
        case 'REGISTER_REJECTED' : 
            return {
                ...state,
                isError:true,
                isSuccses:false,
                user:'ini user gagal'
            }
        case 'REGISTER_PENDING' : 
            return {
                ...state,
                user:'ini user PENDING'
            }
        default : 
            return state
    }
    
}