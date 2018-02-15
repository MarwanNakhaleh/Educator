import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_EDIT_SAVE
} from './types';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        // goes back to employeeList and resets the view stack
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.main();
        });
    }
};

export const employeeFetch = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            // this automatically dispatches updated values
            .on('value', snapshot => {
                dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
            });
    }
};

export const employeeEditSave = ({ name, phone, shift, uid }) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name, phone, shift})
        // goes back to employeeList and resets the view stack
        .then(() => {
            dispatch({ type: EMPLOYEE_EDIT_SAVE });
            Actions.main();
        });
    };
};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
    // no dispatch cause the view will remove the user automatically when we go to the employee list
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.main({type: 'reset'});
        });
    };
};