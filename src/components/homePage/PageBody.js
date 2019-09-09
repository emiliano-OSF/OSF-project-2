import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SyncLoader from "react-spinners/SyncLoader";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import "./PageBody.scss"

//import ProdPhoto from "../assets/img/home/768/lady-full.png";
import ProdPhoto from "../../assets/img/home/768/lady-full.png";
import DeliveryPack from "../../assets/img/icons/delivery-package.svg";
import Arrows from "../../assets/img/icons/triangular-arrows.svg";
import Clipboard from "../../assets/img/icons/clipboard.svg";


class PageBody extends Component {

    state = {
        cloudProducts: [],
        products: [],
        isLoadingCloud: true,
        featuredProducts: [],
        isLoadingFeatured: true,
        isLoading: true,
        loadProd: true,
        isError: false,
        landingPage: '/home/category-landing-page'
    }


    /**  requisition when the component is mounted to get the products ant the featured products
     *  in an git API fake database that returns an JSON with the values  **/
    componentDidMount() {
        try {

            fetch("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products/cloud")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        cloudProducts: data,
                        isLoadingPop: false
                    })
                })

            fetch("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products/products")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        products: data,
                        isLoading: false
                    })
                })
            fetch("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products/featured-products")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        featuredProducts: data,
                        isLoadingFeatured: false
                    })
                })

        } catch (err) {
            this.setState({ isError: true, isLoading: false })
        }
    }

    loadCloudSolutions() {
        return (
            <Carousel controls={false}>
                {this.state.cloudProducts.map((cloud) => {
                    return (<Carousel.Item>
                        <img
                            className=" w-100 prod-img__320"
                            src={require(`../../assets/img/home/cloud/prod_${cloud.id}.png`)}
                            alt={cloud.title}
                        />
                        <img
                            className=" w-100 prod-img__768"
                            src={require(`../../assets/img/home/cloud/prod_${cloud.id}.png`)}
                            alt={cloud.title}
                        />
                        <Carousel.Caption>
                            <div className="slide__info" className={`slide__info slide__align-${cloud.id}`}>
                                <h4 className={`align-${cloud.id}`}>{cloud.title}</h4>
                                <p className={`align-${cloud.id}`}>{cloud.text}</p>
                                <a href={this.state.landingPage}>VIEW MORE</a>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>)
                })}

            </Carousel>
        )

    }

    /**  method to load the procducts on the popular products section on screen  **/
    loadPopProdutcs() {
        return (
            
            this.state.products.map((product) => {
                return (
                    // <div className="popular-items-768__prod-tile" onMouseEnter={()=>console.log("mouse em cima")} onMouseLeave={()=> console.log("mouse fora")}>
                    <div className="popular-items-768__prod-tile">
                        <img src={require(`../../assets/img/products/prod-${product.id}.png`)} alt={product.name} />
                        <div className="prod-info">
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                        <div className="prod-tile__overlay">
                            <a className="fas fa-plus"></a>
                            <a className="fas fa-heart" onClick={this.props.increaseFavNumber}></a>
                        </div>
                    </div>
                )
            })
            
            
        )
    }


    /**  to load more products on the popular products/itens section by clicking on the button  **/
    loadMoreProd = () => {
        let lista = this.state.products;
        lista = [...lista, ...lista];

        this.setState({
            products: lista,
            loadProd: false
        })
    }


    /**  load the featured products on its carousel slider section  **/
    loadFeaturedProducts = () => {
        return (
            <ItemsCarousel
                gutter={12}
                activePosition={'center'}
                chevronWidth={100}
                numberOfCards={4}
                slidesToScroll={4}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                rightChevron={<span className='fas fa-angle-right'></span>}
                leftChevron={<span className='fas fa-angle-left'></span>}>
                {Array.from(this.state.featuredProducts).map((product, i) =>

                    <a href={this.state.landingPage} className="featured-products__tile">
                        <img key={i} src={require(`../../assets/img/home/featured/prod_${product.id}.png`)} />
                        <p>{product.title}</p>
                        <span>{product.category}</span>
                    </a>

                )}
            </ItemsCarousel>
        )
    }

    /**  to change the active item on the carousel slider -> featured products section  **/
    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        return (
            <div className="wrapper">
                {/* <button onClick={this.props.increaseFavNumber}>Aumentar</button> */}
                <section className="cloud-solution__container row">
                    {
                        !this.state.isLoadingPop ? this.loadCloudSolutions() : <SyncLoader color="#123abc" />
                    }

                    <div className="promotion-panel">
                        <div className="sale-50">
                            <img src={require("../../assets/img/home/768/sale-50.png")} alt="Promotion" />
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

                <section className="featured-products">
                    <h3>
                        Featured Products
                    </h3>
                    <span>Unde omnis iste natus error sit voluptatem</span>
                    <div className="featured-products__slider" style={{ "padding": "0 60px", "maxWidth": 1000, "margin": "0 auto", 'height': '400px' }}>
                        {
                            !this.state.isLoadingFeatured ? this.loadFeaturedProducts() : <SyncLoader color="white" />
                        }
                        {/* <ItemsCarousel
                            gutter={12}
                            activePosition={'center'}
                            chevronWidth={60}
                            numberOfCards={4}
                            slidesToScroll={4}
                            outsideChevron={true}
                            showSlither={false}
                            firstAndLastGutter={false}
                            activeItemIndex={this.state.activeItemIndex}
                            requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                            rightChevron={<span>tras</span>}
                            leftChevron={<span>Frente</span>}

                        >
                            {Array.from(this.state.featuredProducts).map((_, i) =>

                                <img key={i} src={require(`../../assets/img/home/featured/prod_${_.id}.png`)} />
                            )}
                        </ItemsCarousel> */}
                    </div>
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