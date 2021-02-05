import {combineReducers} from 'redux'
import authReducer from './authReducer'



export default function(){
    combineReducers({
        auth : authReducer
    })
}; 