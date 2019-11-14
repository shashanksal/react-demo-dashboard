import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './menu-container.scss';
const sampleData = require('../../sample-data/sample-data');

const ContainerWrapper = styled.div`
    min-height: 4em;
  background-color: #E8E8E8;
  padding: 10px;
`;

const Container1 = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    float: left;
    position: relative
    padding: 0 1em
    top: 1.5em
`;

const Container2 = styled.div`
    font-size: 1rem;
    font-weight: 400;
    float: right;
    position: relative
    padding: 0 1em
    top: 2.5rem;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  top: 2rem;
  position: relative
    
    option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;x
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000;
  background: #FFFFFF;
  border: none;
  border-radius: 1px;
  font-size: 16px;
  width: 100%;
  line-height: 24px;
  display: inline-block;
  height: 1.5rem
  position: relative;
  top: 1em
`;




class MenuContainer extends Component{

    getEmployeeData(){
        return  sampleData.employees;
    }

    render() {
        return(
            <ContainerWrapper className='grid-container'>
                <div className='grid-item'>
                    <Container1>
                        Our Employees
                    </Container1>
                </div>
                <div className='grid-item'/>
                <div className='grid-item grid-container' >
                    <div className='inner-grid'>
                        <Container2>
                            Sort By
                        </Container2>
                    </div>
                    <div className='inner-grid'>
                        <SelectBox className='inner-grid'>
                            {this.getEmployeeData().map((employee) => (
                                <option value={employee.id}>{employee.firstName}</option>
                            ))}
                        </SelectBox>
                    </div>
                </div>
                <div className='grid-item grid-container' >
                    <div className='inner-grid'>
                        <Container2>
                            Search
                        </Container2>
                    </div>
                    <div className='inner-grid'>
                        <Input defaultValue="" type="text" />
                    </div>
                </div>
            </ContainerWrapper>
        )
    }

}

export default MenuContainer;