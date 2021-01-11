import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import pingReducer from './reducers/pingReducer';
import { pingEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(
    pingReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(pingEpic);