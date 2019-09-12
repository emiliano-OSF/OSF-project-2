import React, { Component } from 'react';
import './CookiesPanel.scss'

export default class CookiePanel extends Component {

    state = {
        show: false,
        wait: true
    }

    /**
     * when the user accept the cookies terms it will be stored in local storage
     * **/
    acceptCookies() {
        window.localStorage.setItem("accepted", true);  // a variable that store an boolean data
        this.setState({
            show: JSON.parse(window.localStorage.accepted)
        })
    }


    /**
     * the code will wait 10 seconds until show the cookie popup
     * **/
    componentWillMount(){
        setTimeout(() => {
            this.setState({
                wait: false
            })
        }, 10000);
    }

    componentDidMount() {
        /**
         * if localstorage is empty it will create an value ans set it to store an "false" string
         * **/
        let storage = (localStorage.accepted);
        if (!storage) {
            localStorage.setItem("accepted", false);
            return;
        }
        this.setState({
            show: JSON.parse(storage)   //store the localstorage on the state
        })
    }

    render() {
        /**
         * verifies if the state is true, if so it will not render the component
         * **/
        if (this.state.show) {
            return ("")
        }


         /**
         * verifies if the state "wait" is true then the component will delay until show itself
         * **/
        if(this.state.wait){
            return ("")
        }

        return (
            <div className="cookie-panel">
                <div className="cookie-panel__warning">
                    <h3>This website uses cookies</h3>
                    <p>
                        OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance
                        and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider
                        that you accept its use. You can expand this information consulting our <a> Cookies Policy Page.</a>
                    </p>
                </div>
                <div className="cookie-panel__action">
                    {/** 
                        if the user click on the exit span it will stop rendering the popup and will not store the value
                    **/}
                    <span className="fas fa-times" onClick={()=> this.setState({show: true})}></span>
                    
                    {/** 
                        it accepts and store the true value and will not show the component anymore
                    **/}
                    <button onClick={() => this.acceptCookies()}>ACCEPT</button>
                </div>
            </div>
        )
    }
}