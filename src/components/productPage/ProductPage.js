import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import './ProductPage.scss';


export default class ProductPage extends Component {

    constructor() {
        super();
        this.changeMainImg = this.changeMainImg.bind(this);
        this.changeQtdValue = this.changeQtdValue.bind(this);
    }

    state = {
        activeImg: 1,
        productPrice: 299.99,
        qtdValue: 1
    }

    changeMainImg(node) {
        this.setState({
            activeImg: parseInt(node.target.id)
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
                <div className="product-page__prod-panel">
                    <div className="product-page__img-panel">
                        <img className="product-page__main-img" src={require(`../../assets/img/product-detailed/prod_0${this.state.activeImg}.jpg`)} />

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
                        <button>ADD TO CART</button>
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
                    <div className=""></div>
                </div>
            </section>
        )
    }
}