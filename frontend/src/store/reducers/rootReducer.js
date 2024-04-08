import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
;import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import appReducer from "./appReducer";
import taskReducer from './taskReducer';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const appPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language']
}
export default (history) => combineReducers({
    router: connectRouter(history),
    app: persistReducer(appPersistConfig, appReducer),
    task: persistReducer(appPersistConfig, taskReducer)
})