import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Component import
import MenuContainer from "../menu-container";
import ContentContainer from "../content-container";

import './main-container.scss';

class MainContainer extends Component{

    render() {
        return(
            <React.Fragment>
                <MenuContainer></MenuContainer>
                <ContentContainer></ContentContainer>
            </React.Fragment>
        )
    }
}

export default MainContainer;