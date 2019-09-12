import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './NotFoundPage.scss';


class NotFoudPage extends Component {

    componentDidMount(){
        /**
         * it passes the path to outside the component, to App.js
         * **/
        this.props.setPath(this.props.location.pathname)

    }

    render() {
        return (
            <div className="not-found__container">
                <h2 className='not-found__tittle'>404</h2>

                <div className="not-found__panel">
                    <div className="not-found__warn">
                        <h1>Oops!</h1>
                        <img src={require('../../assets/img/404/exclamation_mark.png')} alt="Oops!" />
                    </div>
                    <div className="not-found__info">
                        <h5>Sorry, this page could not be found!</h5>
                        <p>
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Cum sociis natoque penatibus
                            et. Lorem ipsum dolor sit amet.
                        </p>
                        <a href="/home">Go to Homepage</a>
                        <h5>Search our site</h5>
                        <div className="search-input">
                            <input type="text" placeholder="SEARCH" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(NotFoudPage);