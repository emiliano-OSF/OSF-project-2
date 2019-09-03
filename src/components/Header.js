import React, { Component } from 'react';
import LoginAndDialog from './loginAndDialog/LoginAndDialog'
import "./Header.scss";

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
    constructor() {
        super();
        this.loginPage = React.createRef();
        this.showMenuPanel = this.showMenuPanel.bind(this);
        this.setWrapper = this.setWrapper.bind(this);
        this.handleOutClick = this.handleOutClick.bind(this)
    }

    state = {
        showMenu: false,
        notFoundPage: "/404",
        activePanel: '',
        showLoginDialog: false

    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutClick);
    }

    componentWillMount() {
        document.removeEventListener('mousedown', this.handleOutClick);
    }

    setWrapper(node) {
        this.wrapperRef = node;
    }

    handleOutClick(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            //alert('You clicked outside of me!');
            this.setState({activePanel: ''})
        }
    }

    togleSideMenuBtn = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    showMenuPanel(e) {
        const clicked = e.target.id;
        if (this.state.activePanel === clicked) {
            this.setState({ activePanel: '' });
        } else {
            this.setState({ activePanel: clicked });
        }
    }

    showLogin =() =>{
        this.loginPage.current.show();
    }


    render() {
        const menuClass = this.state.showMenu ? " fa-times" : "fa-bars";
        const menuShow = this.state.showMenu ? "headernav__ellement-show" : "";

        return (
            <header>
                <div className='logopanel row'>
                    <div className="logopanel__button">
                        <a className={`fas ${menuClass}`} onClick={this.togleSideMenuBtn}></a>
                    </div>
                    <div className={`logopanel__homelogo`}>
                        <a href='/'>
                            <img src={logo} alt="OSF - Home" className="img-320" />
                        </a>
                        <a href='/'>
                            <img src={logoB} alt="OSF - Home" className="img-1280" />
                        </a>

                    </div>
                </div>

                <nav className="mega-menu">
                    <nav className="headernav__buttons">
                        <h4 ref={this.setWrapper} className={`${this.state.activePanel === 'first' ? "active" : ""}`} id="first" onClick={this.showMenuPanel}>SERVICES <span className="fas fa-caret-down"></span></h4>
                        <h4 ref={this.setWrapper} className={`${this.state.activePanel === 'second' ? "active" : ""}`} id="second" onClick={this.showMenuPanel}>COMPANY <span className="fas fa-caret-down"></span></h4>
                        <h4 ref={this.setWrapper} className={`${this.state.activePanel === 'third' ? "active" : ""}`} id="third" onClick={this.showMenuPanel}>LIBRARY <span className="fas fa-caret-down"></span></h4>
                        <h4 ref={this.setWrapper} className={`${this.state.activePanel === 'fourth' ? "active" : ""}`} id="fourth" onClick={this.showMenuPanel}>CONTACT US <span className="fas fa-caret-down"></span></h4>
                    </nav>

                    <section className="nav-panel" style={{ display: this.state.activePanel === 'first' ? 'flex' : 'none' }}>
                        <div className={`nav-panel__category-block`} >
                            <span>PRODUCT CATEGORY</span>
                            <div className="nav-panel__categories">
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Accessories </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Alcohol </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Art </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Books </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Drink </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Eletronics </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Flower & Plants </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Food </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Gadgets </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Garden </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Home </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Jewelry </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Kids & Baby </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Men's Fashion </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Mobile </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Motorcycles </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Movies </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Music </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Office </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Pets </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Romantic </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Sport </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Toys </a>

                            </div>

                        </div>
                        <div className="nav-panel__category-block">
                            <span>SALE</span>
                            <div className="nav-panel__categories">
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Accessories </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Alcohol </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Art </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Books </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Drink </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Eletronics </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Flower & Plants </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Food </a>
                            </div>


                        </div>
                    </section>
                    <section className="nav-panel" style={{ display: this.state.activePanel === 'second' ? 'flex' : 'none' }}>
                        <div className="nav-panel__category-block">
                            <span>COMPANY PANEL</span>
                            <div className="nav-panel__categories">
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Company Option </a>
                            </div>

                        </div>
                    </section>
                    <section className="nav-panel" style={{ display: this.state.activePanel === 'third' ? 'flex' : 'none' }}>
                        <div className="nav-panel__category-block">
                            <span>LIBRARY</span>
                            <div className="nav-panel__categories">
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Library Option </a>
                            </div>

                        </div>
                    </section>
                    <section className="nav-panel" style={{ display: this.state.activePanel === 'fourth' ? 'flex' : 'none' }}>
                        <div className="nav-panel__category-block">
                            <span>CONTACT US</span>
                            <div className="nav-panel__categories">
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoundPage}>Contact Option </a>
                            </div>

                        </div>
                    </section>
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
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Accessories </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Alcohol </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Art </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Books </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Drink </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Eletronics </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Flower & Plants </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Gadgets </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Garden </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Home </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Jewelry </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Kids & Baby </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Men's Fashion </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Mobile </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Motorcycles </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Food </a>
                            </div>
                            <div className="nav-menu">
                                <span className="nav-menu__title">Sale</span>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Accessories </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Alcohol </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Art </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Books </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Drink </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Eletronics </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Flower & Plants </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Food </a>
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
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
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
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
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
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
                                <a className="nav-menu__op-category" href={this.state.notFoudPage}>Option </a>
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
                        <a onClick={this.showLogin}>
                        <img src={userIcon} />
                        </a>
                    </li>
                    <li>
                        <img src={wishIcon} />
                    </li>
                    <li>
                        <img src={cartIcon} />
                    </li>
                </ul>
                <LoginAndDialog ref={this.loginPage} />
            </header>
        )
    }
}

export default Header;