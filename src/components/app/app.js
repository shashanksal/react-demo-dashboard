import React , {Component} from 'react';
import './app.scss';

//Import Components
import Header from '../header';
import MainContainer from "../main-container";

class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <Header></Header>
                    <MainContainer></MainContainer>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
