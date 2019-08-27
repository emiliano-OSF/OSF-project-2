import React, { Component } from 'react';
import Header from './Header';
import PageBody from './PageBody';



class App extends Component {
    render() {
        return (
            <div className="app" >
                <Header/>
                <PageBody/>
            </div>
        )
    }
}

export default App;