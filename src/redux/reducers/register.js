import * as types from './../types';

const initialState = {
    data:[]
}

export default function auth(state = initialState, action){
    switch(action.type){
        case 'SET_USER' : 
            state = {
                ...state
                // data:action.payload
            }
        case 'REGISTER_FULFILLED' : 
            return {
                ...state,
                user:'ini user behasil'
                // data:action.payload.data   
            }
        case 'REGISTER_REJECTED' : 
            return {
                ...state,
                user:'ini user gagal'
                // data:action.payload.data   
            }
        case 'REGISTER_PENDING' : 
            return {
                ...state,
                user:'ini user PENDING'
                // data:action.payload.data   
            }
        default : 
            return state
    }
    
}