import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import Modal from '@material-ui/core/Modal';


import DeliveryPack from '../../assets/img/icons/delivery-package.svg';
import Arrows from '../../assets/img/icons/triangular-arrows.svg';
import Clipboard from '../../assets/img/icons/clipboard.svg';

import './ProductPage.scss';


export default class ProductPage extends Component {

    constructor() {
        super();
        this.changeMainImg = this.changeMainImg.bind(this);
        this.changeQtdValue = this.changeQtdValue.bind(this);
        this.expandMainImg = this.expandMainImg.bind(this);
    }

    state = {
        activeImg: 1,
        productPrice: 299.99,
        qtdValue: 1,
        expandMainImg: false,
        activeTab: 1
    }

    componentDidMount(){

    }

    changeMainImg(node) {
        this.setState({
            activeImg: parseInt(node.target.id)
        })
    }

    expandMainImg(){
        
        this.setState({
            expandMainImg: true
        })
    }

    toggle = () => {
        this.setState({
            expandMainImg: false
        })
    }

    /**method to change the qtdValue state**/
    changeQtdValue(node) {
        const operator = node.target.id; /** get the operator by id**/
        const value = parseInt(node.target.value); /** if it's an input value it will be stored here paring to int**/

        /**verification if the value is greater 0 and if the minus was clicked**/
        if (operator == "-") {
            let number = parseInt(this.state.qtdValue - 1)

            /** if the number is already 0 or smaller than, it will stop the method**/
            if (number <= 0) {
                return
            }
            this.setState({
                qtdValue: number
            })
            return;

            /**operation to increase the quantity of products**/
        } else if (operator == "+") {
            this.setState({
                qtdValue: parseInt(this.state.qtdValue + 1)
            })
            return
        }

        /** if the value is undefined it will replace the value with an empty string,
         * the value will never be zero
        **/
        this.setState({
            qtdValue: value ? value : ""
        })
    }

    render() {

        return (
            <section className="product-page">
                <h1>V-Neck Cardigan</h1>
                <div className="product-page__prod-panel">
                    <div className="product-page__img-panel">
                        <img className="product-page__main-img" src={require(`../../assets/img/product-detailed/prod_0${this.state.activeImg}.jpg`)} />
                        <a className="expand fas fa-expand-arrows-alt" onClick={this.expandMainImg}></a>
                        <Modal open={this.state.expandMainImg} onClose={this.toggle}>
                            <img className="product-page__expanded-img" src={require(`../../assets/img/product-detailed/prod_0${this.state.activeImg}.jpg`)}/>
                        </Modal>
                        <div className="product-page__thumbnail-track">
                            <img
                                id="1"
                                src={require("../../assets/img/product-detailed/prod_01-small.jpg")}
                                onClick={this.changeMainImg}
                                style={{ 'border': this.state.activeImg == "1" ? '2px solid green' : "" }}
                            />
                            <img
                                id="2"
                                src={require("../../assets/img/product-detailed/prod_02-small.jpg")}
                                onClick={this.changeMainImg}
                                style={{ 'border': this.state.activeImg == "2" ? '2px solid green' : "" }}
                            />
                            <img
                                id="3"
                                src={require("../../assets/img/product-detailed/prod_03-small.jpg")}
                                onClick={this.changeMainImg}
                                style={{ 'border': this.state.activeImg == "3" ? '2px solid green' : "" }}
                            />
                            <img
                                id="4"
                                src={require("../../assets/img/product-detailed/prod_04-small.jpg")}
                                onClick={this.changeMainImg}
                                style={{ 'border': this.state.activeImg == "4" ? '2px solid green' : "" }}
                            />

                        </div>
                    </div>
                    <div className="product-page__info-panel">
                        <h2>${this.state.productPrice}</h2>
                        <select>
                            <option>Dark Gray</option>
                        </select>
                        <div className="product-page__buy-op">
                            <span id="-" className="fas fa-minus" onClick={this.changeQtdValue}></span>
                            <input value={this.state.qtdValue} onChange={this.changeQtdValue} />
                            <span id="+" className="fas fa-plus" onClick={this.changeQtdValue}></span>
                        </div>
                        <button onClick={()=>this.props.setCartNumber(this.state.qtdValue)}>ADD TO CART</button>
                        <p>
                            <ReadMoreReact
                                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                                nulla pariatur?"
                                min={100}
                                max={500}
                            />
                        </p>
                    </div>
                    <div className="product-page__social-media">
                        <span>Share</span>
                        <div>
                            <a href="https://www.facebook.com/OSFGlobalServices" target="blank">
                                <img src={require("../../assets/img/icons/social media/facebook_icon.svg")} />  
                            </a >
                            <a href="https://www.google.com.br/" target="blank">
                                <img src={require("../../assets/img/icons/social media/google_plus_icon.svg")} />  
                            </a>
                            <a  href="https://br.pinterest.com/" target="blank">
                                <img src={require("../../assets/img/icons/social media/pinterest_icon.svg")}/>  
                            </a>
                            <a href="https://twitter.com/osfglobal" target="blank">
                                <img src={require("../../assets/img/icons/social media/twitter_icon.svg")} />  
                            </a>
                        </div>
                    </div>
                </div>
                
                <section className="product-page__tabs">
                    <div className="product-page__tabs-headers">
                        <span className={`${this.state.activeTab == 1? "tab-header__active": ""}`} onClick={()=> this.setState({activeTab: 1})}>Description</span>
                        <span className={`${this.state.activeTab == 2? "tab-header__active": ""}`} onClick={()=> this.setState({activeTab: 2})}>Aditional Information</span>
                        <span className={`${this.state.activeTab == 3? "tab-header__active": ""}`} onClick={()=> this.setState({activeTab: 3})}>Reviews (3)</span>
                    </div>

                    <div className={`product-page__tab-content ${this.state.activeTab == 1? "tab-content__active" : ""}`}>
                        <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                        </p>
                        <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                        </p>
                    </div>
                    <div className={`product-page__tab-content ${this.state.activeTab == 2? "tab-content__active" : ""}`}>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                        </p>
                        <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                        </p>
                    </div>
                    <div className={`product-page__tab-content ${this.state.activeTab == 3 ? "tab-content__active" : ""}`}>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa. Aenean massa.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa.
                        </p>
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
            
            </section>
        )
    }
}