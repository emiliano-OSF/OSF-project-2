import React, { Component, ReactDOM } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import PageBody from './homePage/PageBody';
import Footer from './Footer';
import NotFoundPage from './notFoundPage/NotFoundPage';
import CategoryLandingPage from './categoryLandingPage/CategoryLandingPage';



class App extends Component {
    constructor() {
        super();
        this.state ={
            favNumber: 0
        }
        this.increaseFavNumber = this.increaseFavNumber.bind(this);
        this.setFavnumber = this.setFavnumber.bind(this);

    }

    increaseFavNumber() {
        console.log("foi?")
        this.setState({
            favNumber: this.state.favNumber+=1
        })
    }

    setFavnumber(value){
        this.setState({
            favNumber: value
        })
    }

    render() {
        return (
            <div className="app" >
                <Header favNumber={this.state.favNumber} />
                <Breadcrumb />

                {/** Router component to make navigation on the component pages **/}
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={()=> <PageBody increaseFavNumber={this.increaseFavNumber}/>} />
                        <Route path="/home" exact={true} component={()=> <PageBody increaseFavNumber={this.increaseFavNumber}/>}/>} />
                        <Route path="/home/404" component={()=> <NotFoundPage/>} />
                        <Route path="/home/category-landing-page" component={()=> <CategoryLandingPage/>} />

                    </Switch>
                    {/* <PageBody /> */}
                </BrowserRouter>

                <Footer />
            </div>
        )
    }
}

export default App;

