import { combineReducers } from 'redux';
import depotData from "./module/DepotData";
import detailList from './module/DetailList';

export default combineReducers({ depotData, detailList });
