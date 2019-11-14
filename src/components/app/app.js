import React , {Component} from 'react';
import './app.scss';

//Import Components
import Header from '../header';
import MainContainer from "../main-container";

const sampleData = require('../../sample-data/sample-data');

class App extends Component{

    render() {
        return(
            <React.Fragment>
                <div>
                    <Header sampleData={sampleData}></Header>
                    <MainContainer sampleData={sampleData}></MainContainer>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
