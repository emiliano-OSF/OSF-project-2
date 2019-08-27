import React, { Component } from 'react';
import logo from "../assets/img/icon-osf.png"

class Header extends Component {

    state = { showMenu: false };

    togleMenuBtn = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const menuClass = this.state.showMenu ? " fa-times" : "fa-bars";

        return (
            <header>
                <div className='logopanel row'>
                    <div className="logopanel__button col-4">
                        <a className={`fas ${menuClass}`} id="toggle__nav" onClick={this.togleMenuBtn}></a>
                    </div>
                    <div className="logopanel__homelogo co-7">
                        <img src={logo} alt="OSF - Home" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;