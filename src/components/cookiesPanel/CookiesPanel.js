import React, { Component } from 'react';
import './CookiesPanel.scss'

export default class CookiePanel extends Component {

    state = {
        show: false,
        wait: true
    }

    acceptCookies() {
        window.localStorage.setItem("accepted", true);
        this.setState({
            show: JSON.parse(window.localStorage.accepted)
        })
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({
                wait: false
            })
        }, 10000);
    }

    componentDidMount() {
        let storage = (localStorage.accepted);
        if (!storage) {
            localStorage.setItem("accepted", false);
            return;
        }
        this.setState({
            show: JSON.parse(storage)
        })
    }

    render() {
        if (this.state.show) {
            return ("")
        }

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
                    <span className="fas fa-times"></span>
                    <button onClick={() => this.acceptCookies()}>ACCEPT</button>
                </div>
            </div>
        )
    }
}