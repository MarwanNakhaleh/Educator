import React, {Component} from 'react';
import {
    Card,
    CardSection,
    Input
} from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { View } from 'react-native';


class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="(555) 555-5555" 
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Shift days" 
                        placeholder="e.g.: Monday, Tuesday, Friday" 
                        value={this.props.shift}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);