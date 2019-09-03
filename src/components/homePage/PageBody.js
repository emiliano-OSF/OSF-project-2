import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import SyncLoader from "react-spinners/SyncLoader"
import "./PageBody.scss"

//import ProdPhoto from "../assets/img/home/768/lady-full.png";
import ProdPhoto from "../../assets/img/home/768/lady-full.png";
import DeliveryPack from "../../assets/img/icons/delivery-package.svg";
import Arrows from "../../assets/img/icons/triangular-arrows.svg";
import Clipboard from "../../assets/img/icons/clipboard.svg";


class PageBody extends Component {

    state = {
        products: [],
        isLoading: true,
        isError: false,
        loadProd: true
    }

    async componentDidMount() {
        try {
            fetch("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products/products")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        products: data,
                        isLoading: false
                    })
                })

        } catch (err) {
            this.setState({ isError: true, isLoading: false })
        }
    }

    loadPopProdutcs() {
        return (
            this.state.products.map((product) => {
                return (
                    <div className="popular-items-768__prod-tile">
                        <img src={require(`../../assets/img/products/prod-${product.id}.png`)} alt={product.name} />
                        <div className="prod-info">
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                    </div>
                )
            })
        )
    }

    loadMoreProd = () => {
        //console.log("carregou");
        let lista = this.state.products;
        lista = [...lista, ...lista];
        try {

            this.setState({
                products: lista,
                loadProd: false
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        console.log(this.props.foi);
        return (
            <div className="wrapper">
                <section className="cloud-solution__container row" >
                    <Carousel className="" controls={false}>
                        <Carousel.Item>
                            <img
                                className=" w-100 prod-img__320"
                                src={ProdPhoto}
                                alt="First slide"
                            />
                            <img
                                className="w-100 prod-img__768"
                                src={require("../../assets/img/home/768/lady-full.png")}
                                alt="First slide"
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
                                className=" w-100 prod-img__320"
                                src={ProdPhoto}
                                alt="First slide"
                            />
                            <img
                                className="w-100 prod-img__768"
                                src={require("../../assets/img/home/768/lady-full.png")}
                                alt="First slide"
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
                                className=" w-100 prod-img__320"
                                src={ProdPhoto}
                                alt="First slide"
                            />
                            <img
                                className="w-100 prod-img__768"
                                src={require("../../assets/img/home/768/lady-full.png")}
                                alt="First slide"
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
                                className=" w-100 prod-img__320"
                                src={ProdPhoto}
                                alt="First slide"
                            />
                            <img
                                className="w-100 prod-img__768"
                                src={require("../../assets/img/home/768/lady-full.png")}
                                alt="First slide"
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

                    <div className="promotion-panel">
                        <div className="sale-50">
                            <img src={require("../../assets/img/home/768/sale-50.png")} />
                            <span className="sale-50__offer">50%</span>
                        </div>
                        <div className="social-facebook">
                            <h4>Follow us on Facebook</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
                            <a href="https://www.facebook.com/OSFGlobalServices" target="blank" title="Follow OSF - Global on Facebook"><span className="fab fa-facebook-f"></span> Follow</a>
                        </div>
                    </div>
                </section>

                <section className="popular-items-320__container">
                    <h2>Popular Items</h2>

                    <div className="popular-items__container-wrapper">
                        <Carousel controls={false}>
                            {this.state.products.map((product) => {
                                return (
                                    <Carousel.Item >
                                        <img
                                            className="d-block w-100"
                                            src={require(`../../assets/img/products/prod-${product.id}.png`)}
                                            alt={product.name}
                                        />
                                        <Carousel.Caption>
                                            <div className="slide__price-info">
                                                <h4 className="slide__prod-name"> {product.name}</h4>
                                                <span className="slide__prod-price">{product.price}</span>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>)
                            })}

                        </Carousel>
                    </div>
                </section>

                <section className="popular-items-768__container">
                    <h2>Popular items</h2>
                    <div className="popular-items-768__container-wrapper">
                        {
                            !this.state.isLoading ? this.loadPopProdutcs() : <SyncLoader color="white" />
                        }

                    </div>
                    {this.state.loadProd ? <button onClick={this.loadMoreProd}>LOAD MORE <span className="fas fa-redo" ></span></button> : null}

                </section>

                <section className="banner-osf">
                    <div className="banner-osf__info" >
                        <h2>Banner OSF Theme</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src={require("../../assets/img/home/banner-osf.png")} alt="Banner OSF" />
                </section>

                <section className="advantages">
                    <div className="advantages__panel">
                        <div className="advantages__icon">
                            <img src={DeliveryPack} alt="Delivery Package" />
                        </div>
                        <div className="advantages__info">
                            <h4>Focus</h4>
                            <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
                        </div>
                    </div>
                    <div className="advantages__panel reversed">
                        <div className="advantages__icon">
                            <img src={Arrows} alt="Triangular Arrows" />
                        </div>
                        <div className="advantages__info">
                            <h4>Method</h4>
                            <p>A standardized methodology designed to deliver measurable business results and predictable costs.</p>
                        </div>
                    </div>
                    <div className="advantages__panel">
                        <div className="advantages__icon">
                            <img src={Clipboard} alt="Clipboard" />
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