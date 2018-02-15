import _ from 'lodash';
import React, {Component} from 'react';
import {ListView, View, Text, Dimensions, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './EmployeeListItem';

class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeeFetch();

        this.createDataSource(this.props)
    }

    // called whenever new set of props are received
    // it's called with the new set of props
    componentWillReceiveProps(nextProps){
        // this.props is the old set, nextProps is the new props
        // access to both sets
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render(){
        return(
            <ListView
                style={styles.container}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = {
    container: {
      flex: 1, 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      height: Dimensions.get('window').height - StatusBar.currentHeight, 
      width: Dimensions.get('window').width
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employeeList, (val, uid) => {
        return { ...val, uid };
    });

    return {employees};
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);