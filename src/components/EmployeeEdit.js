import _ from 'lodash';
import React, {Component} from 'react';
import {
    Card,
    CardSection,
    Input,
    Button,
    ModalConfirm
} from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEditSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component{
    state = {showModal: false};

    onSavePress(){
        const { name, phone, shift } = this.props;
        this.props.employeeEditSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onAccept(){
        this.props.employeeDelete({uid: this.props.employee.uid})
    }

    onReject(){
        this.setState({showModal: false})
    }

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    render(){
        return(
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onSavePress.bind(this)}>
                        Add
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => { this.setState({showModal: !this.state.showModal}); }}>
                        Delete
                    </Button>
                </CardSection>

                <ModalConfirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onReject={this.onReject.bind(this)}
                >
                    Are you sure you want to delete {this.props.name}?
                </ModalConfirm>
            </Card>
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

export default connect(mapStateToProps, {employeeUpdate, employeeEditSave, employeeDelete})(EmployeeEdit);