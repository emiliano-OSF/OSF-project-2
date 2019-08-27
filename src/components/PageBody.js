import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ProdPhoto from "../assets/img/home/lady_01.png"

class PageBody extends Component {

    render() {
        return (
            <section className="cloud-solution__container" style={{ padding: '10px' }}>
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
                </Carousel>

            </section>
        )
    }
}

export default PageBody;