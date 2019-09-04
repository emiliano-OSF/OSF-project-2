import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Breadcrumb.scss';

const Router = withRouter(props => <Breadcrumb {...props} />);

export default class Breadcrumb extends Component {

    render() {

        const path = window.location.pathname;
        
        if(path == '/'){
            return null;
        }
        return (

            <div className="breadcrumb__container">
                
            </div>
        )
    }
}