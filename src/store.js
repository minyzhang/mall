
import changeData from './store/index'
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
const changeLow = []
if(process.env.NODE_ENV !== 'production'){
    changeLow.push(logger)
}
// 若想使用redux浏览器插件需要进行配置
export default createStore(changeData,applyMiddleware(...changeLow))
