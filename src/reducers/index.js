import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: AuthReducer,
    // choose a different name for multiple employee forms
    employeeForm: EmployeeFormReducer,
    employeeList: EmployeeListReducer
});