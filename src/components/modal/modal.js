import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './modal.scss';


const ModalFade = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  padding: 20px;
  display: flex;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const ContainerShort = styled.div`
  font-size: 0.6rem;
  width: 30%;
  word-wrap: break-word;
`;

const ContainerLong = styled.div`
  padding: 2em;
`;

const EmployeeContainer = styled.div`
  border: 2px solid;
  max-width: 100px;
`;

const EmployeeInfo = styled.div`
  width: 70%;
`;

const Employee = styled.img`
  width: 100%;
`;

const Close = styled.span`
  display: absolute;
  font-size: 1.3rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
`;

class Modal extends Component{

    render() {
        const { employee, open, onClose } = this.props;
        return open ? (<ModalFade onClick={onClose}>
            <ModalContainer>
                <Close onClick={onClose}>X</Close>
                <ContainerShort>
                    <EmployeeContainer>
                        <Employee src={employee.avatar} />
                    </EmployeeContainer>
                    <div>
                        {employee.jobTitle}
                    </div>
                    <div>
                        Age: {employee.age}
                    </div>
                    <div>
                        Joined: {employee.dateJoined}
                    </div>
                </ContainerShort>
                <ContainerLong>
                    <div className='modal-employee-name'>
                        {employee.firstName} {employee.lastName}
                        <hr />
                    </div>
                    <EmployeeInfo>
                        {employee.bio}
                    </EmployeeInfo>
                </ContainerLong>
            </ModalContainer>
        </ModalFade>) : null;
    }
}

Modal.protoTypes = {
    onClose : PropTypes.func,
}

export default Modal;