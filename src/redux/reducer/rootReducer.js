import { combineReducers } from 'redux';
import employees from './employees'
import worklog from './worklog'

const rootReducer = combineReducers({employees, worklog});

export default rootReducer;