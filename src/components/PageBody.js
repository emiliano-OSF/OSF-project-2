import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ProdPhoto from "../assets/img/home/lady_01.png";
import PopItem from "../assets/img/home/pop-item.png"

class PageBody extends Component {

    render() {
        return (
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
                                        <h4 className="prod-name">Kristina Dam Oak Table With White Marble Top </h4>
                                        <span className="prod-proce">$ {799.55}</span>
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
                                    src={PopItem}
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
                    </div>
                </section>
            </div>
        )
    }
}

export default PageBody;