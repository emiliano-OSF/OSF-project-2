import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ProdPhoto from "../assets/img/home/lady_01.png";
import PopItem from "../assets/img/home/pop-item.png";
import BannerOSF from "../assets/img/home/banner-osf.png";
import DeliveryPack from "../assets/img/icons/delivery-package.svg";
import Arrows from "../assets/img/icons/triangular-arrows.svg";
import Clipboard from "../assets/img/icons/clipboard.svg";

class PageBody extends Component {

    render() {
        return ( //Abaixo implementar a entrada de produtos de maneira dinamica via requisição
            <div className="wrapper">

                <section className="cloud-solution__container" >
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ProdPhoto}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                <div className="slide__info">
                                    <h4>Control and manage any device with cloud solutions </h4>
                                    <p>
                                        Improve business peformanceand the user experience with the right mix of IoT
                                        technology and processes.
                                </p>
                                    <button>VIEW MORE</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ProdPhoto}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="slide__info">
                                    <h4>Control and manage any device with cloud solutions </h4>
                                    <p>
                                        Improve business peformanceand the user experience with the right mix of IoT
                                        technology and processes.
                                </p>
                                    <button>VIEW MORE</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ProdPhoto}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="slide__info">
                                    <h4>Control and manage any device with cloud solutions </h4>
                                    <p>
                                        Improve business peformanceand the user experience with the right mix of IoT
                                        technology and processes.
                                </p>
                                    <button>VIEW MORE</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ProdPhoto}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="slide__info">
                                    <h4>Control and manage any device with cloud solutions </h4>
                                    <p>
                                        Improve business peformanceand the user experience with the right mix of IoT
                                        technology and processes.
                                </p>
                                    <button>VIEW MORE</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>

                </section>

                <section className="popular-items__container">
                    <h2>Popular Items</h2>
                    <div className="popular-items__container-wrapper">
                        <Carousel controls={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={PopItem}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="slide__price-info">
                                        <h4 className="slide__prod-name">Kristina Dam Oak Table With White Marble Top </h4>
                                        <span className="slide__prod-price">$ {799.55}</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={PopItem}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="slide__price-info">
                                        <h4 className="slide__prod-name">Kristina Dam Oak Table With White Marble Top</h4>
                                        <span className="slide__prod-price">$ {799.55}</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={PopItem}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="slide__price-info">
                                        <h4 className="slide__prod-name">Kristina Dam Oak Table With White Marble Top </h4>
                                        <span className="slide__prod-price">$ {799.55}</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>

                <section className="banner-osf">
                    <div className="banner-osf__info" >
                        <h2>Banner OSF Theme</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src={BannerOSF} />
                </section>

                <section className="advantages">
                    <div className="advantages__panel">
                        <div className="advantages__icon">
                            <img src={DeliveryPack} />
                        </div>
                        <div className="advantages__info">
                            <h4>Focus</h4>
                            <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
                        </div>
                    </div>
                    <div className="advantages__panel reversed">
                        <div className="advantages__icon">
                            <img src={Arrows} />
                        </div>
                        <div className="advantages__info">
                            <h4>Method</h4>
                            <p>A standardized methodology designed to deliver measurable business results and predictable costs.</p>
                        </div>
                    </div>
                    <div className="advantages__panel reversed">
                        <div className="advantages__icon">
                            <img src={Clipboard} />
                        </div>
                        <div className="advantages__info">
                            <h4>Knowledge</h4>
                            <p>A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business risk</p>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default PageBody;