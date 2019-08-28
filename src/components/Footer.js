import React, { Component } from 'react';

class Footer extends Component {

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

                <div className="footer__menu">
                    <div className="footer__menu--op">
                        <span>Contact <span className="fas fa-caret-down"></span></span>
                        <p className="footer__contact">
                            Headquarters:
                            5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6 <br />
                            <a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
                            <a href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                        </p>
                    </div>
                    <div className="footer__menu--op">
                        <div className="footer-category">
                            <span className="footer-category">Categories <span className="fas fa-caret-down"></span></span>
                            <a className="footer-category__op" href="./pages/not-found.html">Accessories</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Alcohol</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Art</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Books</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Drink</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Eletronics</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Flowers & Plants</a>
                            <a className="footer-category__op" href="./pages/not-found.html">Food</a>
                        </div>

                        <div className="footer__menu--op">
                            <div className="footer-category">
                                <span className="footer-category">About <span className="fas fa-caret-down"></span></span>
                                <a className="footer-category__op" href="./pages/not-found.html">About us</a>
                                <a className="footer-category__op" href="./pages/not-found.html">Delivery</a>
                                <a className="footer-category__op" href="./pages/not-found.html">Testmonials</a>
                                <a className="footer-category__op" href="./pages/not-found.html">Contact</a>

                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;