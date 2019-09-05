import React, { Component } from 'react';

import './Breadcrumb.scss';


export default class Breadcrumb extends Component {

    constructor() {
        super();
        //this.setWrapper = this.setWrapper.bind(this)
        this.mountBreadcrumb = this.mountBreadcrumb.bind(this)
    }

    state = {
        path: window.location.pathname
    }

    // setWrapper(node){
    //     this.wrapperRef = node;
    // }

    navigateTo(e) {
        window.location = e.target.id;
        //console.log(e.target.id)
    }

    mountBreadcrumb() {
        let paths = this.state.path.split('/');
        paths = paths.filter((e)=> {return e})

        return (
            paths.map((crumb, i, arr) => {
                let sentence = crumb.replace( /([A-Z])/g, " $1" );
                let finalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

                if ((arr.length - 1) == i) {
                    return (
                        <h4 id="" className="last-crumb">
                            <span>/</span>
                            {finalSentence}
                        </h4>
                    )
                } else if ((i > 0) && (i < (arr.length - 1))) {
                    return (
                        <h4 id={`/${crumb}`} onClick={this.navigateTo}>
                            <span>/</span>
                            {finalSentence}
                        </h4>
                    )
                }
                return (
                    <h4 id={`/${crumb}`} onClick={this.navigateTo}>
                        {finalSentence}
                    </h4>

                )
            })
        )

    }

    render() {

        //const path = window.location.pathname;

        //this.mountBreadcrumb()
        return (
            <div className="breadcrumb__container">
                {this.state.path == '/home' ? null : this.mountBreadcrumb()}
                {/* <h4>Home</h4>
                <h4> Landing Page</h4>
                <h4 className="last-crumb"> Product </h4> */}
            </div>
        )
    }
}