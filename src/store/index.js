import {combineReducers,applyMiddleware} from 'redux'
import TypeData from "./modul/TypeDate"
import logger from 'redux-logger'
const changeLow = []
if(process.env.NODE_ENV !== 'production'){
    changeLow.push(logger)
}
export default combineReducers({TypeData},applyMiddleware(changeLow))