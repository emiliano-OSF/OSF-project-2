import React, { Component } from 'react';
import "./Footer.scss"

class Footer extends Component {

    state= {
        notFoundPage: '/home/404'
    }

    render() {
        const year = new Date();
        return (
            <footer>
                <div className="copyrights">
                    <span>
                        &copy; Copyrights {year.getFullYear()}  <br />
                        All Rights Reserved
                    </span>
                </div>

                <div className="footer-menu contact-sm">
                    <div className="footer-menu--op contact-sm">
                        <span>Contact <span className="fas fa-caret-down"></span></span>
                        <p className="footer__contact">
                            Headquarters:
                            5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6 <br />
                            <a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
                            <a href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                        </p>
                    </div>
                    <div className="footer-menu--op contact-md">
                        <span>Cuuuuuuuuu <span className="fas fa-caret-down"></span></span>
                        <p className="footer__contact">
                            Headquarters:
                            5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6 <br />
                            <a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
                            <a href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                        </p>
                    </div>
                    <div className="footer-menu--op">
                        <div className="footer-category">
                            <span className="footer-category">Categories <span className="fas fa-caret-down"></span></span>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Accessories</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Alcohol</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Art</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Books</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Drink</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Eletronics</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Flowers & Plants</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Food</a>
                        </div>
                    </div>
                    <div className="footer-menu--op">
                        <div className="footer-category">
                            <span className="footer-category">About <span className="fas fa-caret-down"></span></span>
                            <a className="footer-category__op" href={this.state.notFoundPage}>About us</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Delivery</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Testmonials</a>
                            <a className="footer-category__op" href={this.state.notFoundPage}>Contact</a>

                        </div>
                    </div>
                    <div className="footer-social-media" >
                        <a className="social-media__icon" href="https://www.facebook.com/OSFGlobalServices" target="blank">
                            <img src={require("../assets/img/icons/social media/facebook_icon.svg")} />
                        </a>
                        <a className="social-media__icon" href="https://www.google.com.br/" target="blank">
                            <img src={require("../assets/img/icons/social media/google_plus_icon.svg")} />
                        </a>
                        <a className="social-media__icon" href="https://br.pinterest.com/" target="blank">
                            <img src={require("../assets/img/icons/social media/pinterest_icon.svg")} />
                        </a>
                        <a className="social-media__icon" href="https://twitter.com/osfglobal" target="blank">
                            <img src={require("../assets/img/icons/social media/twitter_icon.svg")} />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;