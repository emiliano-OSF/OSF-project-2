import React, { Component } from 'react';
import logo from "../assets/img/icon-osf.png"
import logoB from "../assets/img/logo-osf.png";
import searchIcon from "../assets/img/icons/search.svg";
import userIcon from "../assets/img/icons/user.svg";
import wishIcon from "../assets/img/icons/heart.svg";
import cartIcon from "../assets/img/icons/bag.svg"


class Header extends Component {

    state = { showMenu: false };

    togleMenuBtn = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const menuClass = this.state.showMenu ? " fa-times" : "fa-bars";
        const menuShow = {
            left: this.state.showMenu ? "0%" : "-100%"
        }

        return (
            <header>
                <div className='logopanel row'>
                    <div className="logopanel__button col-4">
                        <a className={`fas ${menuClass}`} id="toggle__nav" onClick={this.togleMenuBtn}></a>
                    </div>
                    <div className="logopanel__homelogo co-7">
                        <img src={logo} alt="OSF - Home" className="img-320" />
                        <img src={logoB} alt="OSF - Home" className="img-1280" />
                    </div>
                </div>
                <nav className="headernav row" >
                    <ul className="headernav__option col-12" style={menuShow}>
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
                </nav>
            </header>
        )
    }
}

export default Header;