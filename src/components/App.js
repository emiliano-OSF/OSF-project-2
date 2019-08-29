import React, { Component } from 'react';
import Header from './Header';
import PageBody from './PageBody';
import Footer from './Footer';
// import Teste from './Test';



class App extends Component {
    render() {
        return (
            <div className="app" >
                <Header/>
                <PageBody/>
                <Footer/>
            </div>
        )
    }
}

export default App;