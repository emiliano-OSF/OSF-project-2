import React, { Component, ReactDOM } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import CookiePanel from '../components/cookiesPanel/CookiesPanel';
import Footer from './Footer';

import PageBody from './homePage/PageBody';
import NotFoundPage from './notFoundPage/NotFoundPage';
import CategoryLandingPage from './categoryLandingPage/CategoryLandingPage';
import ProductPage from './productPage/ProductPage'



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            favNumber: 0,
            cartNumber: 0
        }
        this.increaseFavNumber = this.increaseFavNumber.bind(this);
        this.setCartNumber = this.setCartNumber.bind(this);

    }

    setCartNumber(value){
        console.log(value);
        if(value < 0) return

        this.setState({
            cartNumber: this.state.cartNumber + value
        })
    }

    increaseFavNumber() {
        this.setState({
            favNumber: this.state.favNumber += 1
        })
    }

    

    render() {
        return (
            <div className="app" >
                <Header favNumber={this.state.favNumber} cartNumber={this.state.cartNumber} />
                <Breadcrumb />

                {/** Router component to make navigation on the component pages **/}
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={() =>
                            <PageBody

                                /**  passing the method to execute and change the attribute on Header prop favNumber 
                                 * here we have two PageBody to prevent error on the first render of the page
                                **/
                                increaseFavNumber={this.increaseFavNumber}
                            />}
                        />
                        <Route path="/home" exact={true} component={() =>
                            <PageBody

                                /**  passing the method to execute and change the attribute on Header prop favNumber  **/
                                increaseFavNumber={this.increaseFavNumber}
                            />}
                        />
                        <Route path="/home/404" component={() =>
                            <NotFoundPage />}
                        />
                        <Route path="/home/category-landing-page" component={() =>
                            <CategoryLandingPage />}
                        />
                        <Route path="/home/product-detailed-page" component={() =>
                            <ProductPage

                                setCartNumber={this.setCartNumber}
                            />}
                        />

                    </Switch>
                </BrowserRouter>
                <CookiePanel/>
                <Footer />
            </div>
        )
    }
}

