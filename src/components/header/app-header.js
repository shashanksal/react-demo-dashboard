import React, {Component} from 'react';
import './app-header.scss';

class AppHeader extends Component{

    constructor(props){
        super(props);
        this.state = {
            company:[]
        }
    }

    getCompanyData(){
        fetch('../../sample-data.json')
            .then(response =>{
                let company = response.companyInfo;
                this.setState({
                    company:company
                })
            })
    }




    render() {
        return(
            <div className='root-container'>


            </div>
        )
    }


}

export default AppHeader;