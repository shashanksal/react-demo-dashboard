import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './card.scss';


const CardWrapper = styled.div`
  border: 1px solid;
  margin: 10px;
  width: 90%;
  height: 100px;
  display: flex;
  background-color: ${(props) => props.highlight ? 'pink' : '#c1c1c1'};
`;

const EmployeeContainer = styled.div`
  border: 2px solid;
  min-width: 100px;
  height: 100%;
`;

const EmployeeDetails = styled.div`
  margin: 1em;
`;

const Employee = styled.img`
  width: 100%;
`;

class Card extends Component{
    constructor(props){
        super(props)
    }
    bioLength = 80;

    displayDetails(emp){
        this.props.callback(emp);
    }

    render() {
        let employee = this.props.employee;
        let highlight = this.props.highlight;
        return(
            <CardWrapper  onClick={() => this.displayDetails(employee)} highlight={highlight}>
                <EmployeeContainer>
                    <Employee src={employee.avatar}/>
                </EmployeeContainer>
                <EmployeeDetails>
                    <div className='employee-name'>{employee.firstName} {employee.lastName}</div>
                    <div className='employee-bio'>{employee.bio.substr(0, this.bioLength)}</div>
                </EmployeeDetails>
            </CardWrapper>
        )
    }
}

Card.protoTypes = {
    callback : PropTypes.func,
}

export default Card;