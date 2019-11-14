import React, {Component} from 'react';
import styled from 'styled-components';
import './app-header.scss';

const HeaderComponent = styled.div`
  min-height: 4em;
  background-color: #0547A6;
  padding: 10px;
`;

const CompanyName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  float: left;
  position: relative
`;

const CompanyMotto = styled.div`
    font-size: 1rem;
    font-weight: 400
`;

const EstablishmentInfo = styled.div`
    font-size: 1rem;
    font-weight: 300;
    position:relative;
    float: right;
    top: 3rem
`


    class AppHeader extends Component{

    getCompanyData(){
        return  this.props.sampleData.companyInfo;
    }

    render() {
        const company = this.getCompanyData();
        return(
            <div className='app-header grid-container'>
                <div className='company-details-wrapper grid-item'>
                    <HeaderComponent>
                        <CompanyName>
                            {company.companyName}
                        </CompanyName>
                        <CompanyMotto>
                            {company.companyMotto}
                        </CompanyMotto>
                    </HeaderComponent>
                </div>
                <div className='grid-item'></div>

                <div className='company-date-wrap grid-item'>
                    <EstablishmentInfo>
                        Since {new Date(company.companyEst).toLocaleDateString()}
                    </EstablishmentInfo>
                </div>
            </div>
        )
    }
}


export default AppHeader;