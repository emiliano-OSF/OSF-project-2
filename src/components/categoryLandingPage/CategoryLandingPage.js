import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './CategoryLandingPage.scss';

import SyncLoader from "react-spinners/SyncLoader";

class CategoryLandingPage extends Component {

    state = {
        products: [],
        isLoading: true
    }


    /**  method that request the products values and sets on the state  **/
    componentDidMount() {
        try {
            this.props.setPath(this.props.location.pathname)

            fetch("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products/products")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        products: data,
                        isLoading: false
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }


    /**  load the products on the section returning an elent  **/
    loadProducts = () => {
        return (
            this.state.products.map((product, i) => {
                return (
                    <div className="product-tile" key={product.name + i}>
                        <img src={require(`../../assets/img/products/prod-${product.id}.png`)} alt={product.name} />
                        <div className="product-tile__description">
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className='landing-page__container'>
                <h2 className='landing-page__tittle'>Services</h2>
                <span>Hide Filter</span>

                <div className='landing-page__filters'>
                    <div className="landing-page__filters--block">
                        <div className='filter'>
                            <span>Price</span>
                            <select>
                                <option>$0.00 $1000.00</option>
                                <option>$1000.00 $2000.00</option>
                                <option>$2000.00 $3000.00</option>
                            </select>
                        </div>
                        <div className='filter'>
                            <span>Color</span>
                            <div style={{ "width": "200px", display: "flex", justifyContent: "space-between" }}>
                                <div className="color"></div>
                                <div className="color" style={{ backgroundColor: "#43c0cf", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#3d402f", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#4aaf00", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#315bbd", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#ec6115", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#dc041d", "border": "transparent" }}></div>
                                <div className="color" style={{ backgroundColor: "#efead7", "border": "transparent" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-page__filters--block">
                        <div className='filter'>
                            <span>Brands</span>
                            <select>
                                <option>Ukraine sport</option>
                            </select>
                        </div>
                        <div className='filter'>
                            <span>Sort by</span>
                            <select>
                                <option>Price</option>
                            </select>
                        </div>
                    </div>
                    <div className="landing-page__filters--block">
                        <div className='filter'>
                            <span>Size</span>
                            <select>
                                <option>Small</option>
                            </select>
                        </div>
                        <div className='filter'>
                            <span>Show</span>
                            <select>
                                <option>16 per page</option>
                            </select>
                        </div>
                    </div>
                </div>

                <p>12,931 results in apparel</p>

                <div className="landing-page__product-panel">
                    {
                        !this.state.isLoading ? this.loadProducts() : <SyncLoader color={'gray'} />
                    }
                </div>
                <button>Load More</button>



            </div >
        )
    }
}

export default withRouter(CategoryLandingPage);