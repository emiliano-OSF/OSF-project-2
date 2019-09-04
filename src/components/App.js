import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import PageBody from './homePage/PageBody';
import Footer from './Footer';
import NotFoundPage from './notFoundPage/NotFoundPage';
import CategoryLandingPage from './categoryLandingPage/CategoryLandingPage';



class App extends Component {
    render() {
        return (
            <div className="app" >
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={PageBody} />
                        <Route path="/404" component={NotFoundPage} />
                        <Route path="//category-landing-page" component={CategoryLandingPage} />

                    </Switch>
                    {/* <PageBody /> */}
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

export default App;