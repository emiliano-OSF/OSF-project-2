import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import PageBody from './homePage/PageBody';
import Footer from './Footer';
import NotFoundPage from './notFoundPage/NotFoundPage';
import CategoryLandingPage from './categoryLandingPage/CategoryLandingPage';



class App extends Component {
    render() {
        return (
            <div className="app" >
                <Header />
                <Breadcrumb/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" exact={true} component={PageBody} />
                        <Route path="/home/404" component={NotFoundPage} />
                        <Route path="/home/category-landing-page" component={CategoryLandingPage} />

                    </Switch>
                    {/* <PageBody /> */}
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

export default App;