import React from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop: 50, height: 200}}>
            <Stack key='root' hideNavBar >
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please log in' initial />
                </Scene>
                <Scene key='main' style={{flex: 1}}>
                    <Scene 
                        key='employeeList' 
                        component={EmployeeList} title='Employee List' 
                        initial 
                        rightTitle='Add' 
                        onRight={() => Actions.employeeCreate()} 
                    />
                    <Scene 
                        key='employeeCreate' 
                        component={EmployeeCreate} 
                        title='Add New Employee' 
                    />
                    <Scene 
                        key='employeeEdit' 
                        component={EmployeeEdit} 
                        title='Edit Employee' 
                    />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;