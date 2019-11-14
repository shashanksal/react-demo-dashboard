import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from "../card";

import './content-container.scss';

const sampleData = require('../../sample-data/sample-data');

class ContentContainer extends Component{

    getEmployeeData(){
        return sampleData.employees;
    }

    render() {
        return(
            <div className='content-grid-container'>
                {this.getEmployeeData().map((employee) => (
                    <Card employee={employee} key={employee.id}></Card>
                ))}
            </div>
        )
    }
}

export default ContentContainer;