import React, { Component } from 'react';
import "./Header.scss"
//import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../assets/img/icon-osf.png"
import logoB from "../assets/img/logo-osf.png";
import searchIcon from "../assets/img/icons/search.svg";
import userIcon from "../assets/img/icons/user.svg";
import wishIcon from "../assets/img/icons/heart.svg";
import cartIcon from "../assets/img/icons/bag.svg"

// const Call = () =>{
//     const match = useMediaQuery("min-width: 500px");
//     return (<a>{match}</a>);
// }

class Header extends Component {

    state = { showMenu: false };

    togleMenuBtn = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const menuClass = this.state.showMenu ? " fa-times" : "fa-bars";
        const menuShow = this.state.showMenu ? "headernav__ellement-show" : "";

        return (
            <header>
                <div className='logopanel row'>
                    <div className="logopanel__button col-3">
                        <a className={`fas ${menuClass}`} onClick={this.togleMenuBtn}></a>
                    </div>
                    <div className={`logopanel__homelogo col-7`}>
                        <img src={logo} alt="OSF - Home" className="img-320" />
                        <img src={logoB} alt="OSF - Home" className="img-1280" />
                    </div>
                </div>

                <nav className="headernav__768 row">
                    <ul className="headernav__786--option">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>

                <nav className="headernav row" >
                    <ul className={`headernav__option col-12 ${menuShow}`} >
                        <li>
                            <span className="nav-menu__title">
                                <a>SERVICES</a>
                                <a className="fas fa-caret-down"></a>
                            </span>
                            <div className="nav-menu">
                                <span className="nav-menu__title">Product Categories</span>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Accessories </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Alcohol </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Art </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Books </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Drink </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Eletronics </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Flower & Plants </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Food </a>
                            </div>
                            <div className="nav-menu">
                                <span className="nav-menu__title">Sale</span>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Accessories </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Alcohol </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Art </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Books </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Drink </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Eletronics </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Flower & Plants </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Food </a>
                            </div>
                        </li>

                        <li>
                            <span className="nav-menu__title">
                                <a>COMPANY</a>
                                <a className="fas fa-caret-down"></a>
                            </span>
                            <div className="nav-menu">
                                <span className="nav-menu__title">
                                    <a>Company Options</a>
                                    <a className="fas fa-caret-down"></a>
                                </span>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                            </div>
                        </li>

                        <li>
                            <span className="nav-menu__title">
                                <a>LIBRARY</a>
                                <a className="fas fa-caret-down"></a>
                            </span>
                            <div className="nav-menu">
                                <span className="nav-menu__title">
                                    <a>Library Options</a>
                                    <a className="fas fa-caret-down"></a>
                                </span>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                            </div>
                        </li>
                        <li>
                            <span className="nav-menu__title">
                                <a>CONTACT US</a>
                                <a className="fas fa-caret-down"></a>
                            </span>
                            <div className="nav-menu">
                                <span className="nav-menu__title">
                                    <a>Contact Options</a>
                                    <a className="fas fa-caret-down"></a>
                                </span>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                                <a className="nav-menu__op-category" href="./pages/not-found.html">Option </a>
                            </div>
                        </li>

                    </ul>

                    <div className="headernav__option--lang col-3">
                        <ul>
                            <li>ENG</li>
                            <li>$US</li>
                        </ul>
                    </div>
                </nav>
                <ul className="headernav__option--userfixed col-12">
                    <li>
                        <img src={searchIcon} />
                    </li>
                    <li>
                        <img src={userIcon} />
                    </li>
                    <li>
                        <img src={wishIcon} />
                    </li>
                    <li>
                        <img src={cartIcon} />
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;