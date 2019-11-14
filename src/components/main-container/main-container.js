import React, {Component} from 'react';

//Component import
import MenuContainer from "../menu-container";
import ContentContainer from "../content-container";

import './main-container.scss';

class MainContainer extends Component{

    render() {
        let data = this.props.sampleData;
        return(
            <React.Fragment>
                <MenuContainer data={data}></MenuContainer>
                <ContentContainer data={data}></ContentContainer>
            </React.Fragment>
        )
    }
}

export default MainContainer;