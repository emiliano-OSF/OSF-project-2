import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import SyncLoader from "react-spinners/SyncLoader";
import ItemsCarousel from 'react-items-carousel';
import "./PageBody.scss"

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
        path: ""
    }


    /**  requisition when the component is mounted to get the products ant the featured products
     *  in an git API fake database that returns an JSON with the values  **/
    componentDidMount() {
        this.props.setPath(this.props.location.pathname)
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


    /**
     * loads dynamically the cloud solution section slider
     * first carousel
     * **/
    loadCloudSolutions() {
        return (
            <Carousel controls={false}>
                
                {
                    /**map function on the data stored with the slides informations
                     * like title, text and image url
                     * **/
                    this.state.cloudProducts.map((cloud, i) => {
                    return (<Carousel.Item key={cloud.title + i}>
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
                            <div className={`slide__info slide__align-${cloud.id}`}>
                                <h4 className={`align-${cloud.id}`}>{cloud.title}</h4>
                                <p className={`align-${cloud.id}`}>{cloud.text}</p>
                                <a  onClick={()=>this.props.history.push("/home/category-landing-page")}>VIEW MORE</a>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>)
                })}

            </Carousel>
        )

    }

    /**  method to load the products on the popular products section on screen  **/
    loadPopProdutcs() {
        return (

            this.state.products.map((product, i) => {
                return (
                    <div className="popular-items-768__prod-tile" key={product.name + i}>
                        <img src={require(`../../assets/img/products/prod-${product.id}.png`)} alt={product.name} />
                        <div className="prod-info">
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                        <div className="prod-tile__overlay">
                            <a className="fas fa-plus" onClick={()=> this.props.setCartNumber()}></a>
                            <a className="fas fa-heart" onClick={() => this.props.increaseFavNumber()}></a>
                        </div>
                    </div>
                )
            })


        )
    }


    /**  to load more products on the popular products/itens section by clicking on the "load more" button  **/
    loadMoreProd = () => {
        let lista = this.state.products;
        lista = [...lista, ...lista]; // increments the list by its own values

        this.setState({
            products: lista,
            loadProd: false
        })
    }


    /**  load the Featured Products on its carousel slider section  **/
    loadFeaturedProducts = () => {
        return (
            /**
             * different carousel which shows 4 tiles at once
             * it can slides through 4 tiles
             * **/
            <ItemsCarousel
                gutter={12}
                activePosition={'center'}
                chevronWidth={100}
                numberOfCards={4} // sets to 4 the number of tiles
                slidesToScroll={4} // scroll through 4 tiles
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                rightChevron={<span className='fas fa-angle-right'></span>}
                leftChevron={<span className='fas fa-angle-left'></span>}>

                {Array.from(this.state.featuredProducts).map((product, i) =>

                    /**
                     * on click it will navigate to the Category Landing Page without reloading the page 
                     * **/
                    <a onClick={()=> this.props.history.push("/home/category-landing-page")} className="featured-products__tile" key={product.title + i}>
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
                <section className="cloud-solution__container row">
                    {

                        /**
                         * while the products is fetching it will load a loading spinner
                         * **/
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

                {/**
                * it will be loaded when the viewport width value be in 320px
                **/}
                <section className="popular-items-320__container">
                    <h2>Popular Items</h2>
                    <div className="popular-items__container-wrapper">
                        <Carousel controls={false}>
                            {this.state.products.map((product) => {
                                return (
                                    <Carousel.Item key={product.url} >
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
                            /**
                             * same structure for loading spinner
                             * **/
                            !this.state.isLoading ? this.loadPopProdutcs() : <SyncLoader color="white" />
                        }

                    </div>
                    {this.state.loadProd ? <button onClick={this.loadMoreProd}>LOAD MORE <span className="fas fa-redo" ></span></button> : null}

                </section>
                        {/**
                            if click on this element it will navigate to the product detailed page without loading
                            using the React Router power LOL
                        **/}
                <section className="banner-osf" onClick={()=> this.props.history.push("/home/product-detailed-page")}>
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
                            /**  wait until fetch the data - featured products slider  **/
                            !this.state.isLoadingFeatured ? this.loadFeaturedProducts() : <SyncLoader color="white" />
                        }
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


/**
 * structure to gets the router children paths to pass to breadcrumb component
 * **/
export default withRouter(PageBody)