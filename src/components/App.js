import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import CookiePanel from '../components/cookiesPanel/CookiesPanel';
import Footer from './Footer';

import PageBody from './homePage/PageBody';
import NotFoundPage from './notFoundPage/NotFoundPage';
import CategoryLandingPage from './categoryLandingPage/CategoryLandingPage';
import ProductPage from './productPage/ProductPage'

// CORRIGIR O LANCE DAS ROTAS PASSADAS PRO BREAD

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            favNumber: 0,
            cartNumber: 0,
            path: "/home"
        }
        this.increaseFavNumber = this.increaseFavNumber.bind(this);
        this.setCartNumber = this.setCartNumber.bind(this);
        this.setPath = this.setPath.bind(this);

    }

    /**
     * sets the cart number by passing this method as props to the components bellow
     * 
     * it can set the number by geting an valid value or it can just increase by 1
    **/
    setCartNumber(value) {

        if (value < 0) return
        if (value === undefined) {
            this.setState({
                cartNumber: this.state.cartNumber + 1
            })
            return;
        }
        this.setState({
            cartNumber: this.state.cartNumber + value
        })
    }


    /**
     *   the method bellow sets the state path
     *   the path state is to be passed to Breadcrumb component to be correctly rendered
    **/
    setPath(path) {
        if (this.state.path == path) return

        //console.log(path);
        this.setState({
            path: path
        })
    }


    /**    
     * increase the fav number by 1 only
    **/
    increaseFavNumber() {
        this.setState({
            favNumber: this.state.favNumber + 1
        })
    }

    render() {
        return (
            <div className="app" >
                <Header favNumber={this.state.favNumber} cartNumber={this.state.cartNumber} />

                {/** Router component to make navigation on the component pages **/}
                <BrowserRouter>
                    <Breadcrumb path={this.state.path} />
                    <Switch>
                        <Route path="/" exact={true} component={() =>
                            <PageBody

                                /**
                                 * passing the method to execute and change the attribute on Header prop favNumber 
                                 * here we have two PageBody to prevent error on the first render of the page
                                **/
                                increaseFavNumber={this.increaseFavNumber}
                                setCartNumber={this.setCartNumber}
                                setPath={this.setPath}
                            />}
                        />
                        <Route path="/home" exact={true} component={() =>
                            <PageBody

                                /**  passing the method to execute and change the attribute on Header prop favNumber  **/
                                increaseFavNumber={this.increaseFavNumber}

                                /**  the same above but with the cart number **/
                                setCartNumber={this.setCartNumber}
                                setPath={this.setPath}
                            />}
                        />
                        <Route path="/home/404" component={() =>
                            <NotFoundPage
                                setPath={this.setPath}

                            />}
                        />
                        <Route path="/home/category-landing-page" component={() =>
                            <CategoryLandingPage />}
                        />
                        <Route path="/home/product-detailed-page" component={() =>
                            <ProductPage

                                /**  it is to set the cart number by an valid number > 0  **/
                                setCartNumber={this.setCartNumber}

                                setPath={this.setPath}

                            />}
                        />

                    </Switch>
                </BrowserRouter>
                <CookiePanel />
                <Footer />
            </div>
        )
    }
}

