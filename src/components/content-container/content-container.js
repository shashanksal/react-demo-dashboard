import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from "../card";
import Modal from "../modal/modal";

import './content-container.scss';

const sampleData = require('../../sample-data/sample-data');

class ContentContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            modalOpen : false,
            employee : [],
            highlight: false
        }
    }

    getEmployeeData(){
        return sampleData.employees;
    }

    notifyCardClick(employee){
        this.setState({
            employee:employee,
            modalOpen: true,
            highlight: true
        })
    }

    notifyModalClose(){
        this.setState({
            modalOpen: false,
            highlight: false
        })
    }

    render() {
        return(
            <div>
                <div className='content-grid-container'>
                    {this.getEmployeeData().map((employee) => (
                        <Card employee={employee}
                              key={employee.id}
                              callback={this.notifyCardClick.bind(this)}
                              highlight={(this.state.employee.id === employee.id) && (this.state.highlight)}
                        >
                        </Card>
                    ))}
                </div>
                <Modal employee={this.state.employee}
                       open={this.state.modalOpen}
                       onClose={this.notifyModalClose.bind(this)}
                >
                </Modal>
            </div>
        )
    }
}

export default ContentContainer;