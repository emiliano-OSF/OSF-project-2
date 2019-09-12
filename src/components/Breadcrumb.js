import React, { Component } from 'react';

import './Breadcrumb.scss';


export default class Breadcrumb extends Component {

    state = {
        //path: window.location.pathname
        path: ""
    }

    /** method to navigate considering the element clicked **/
    navigateTo(e) {
        window.location = e.target.id;
    }

    componentDidMount(){

    }


    /**  
     * examinate the path string and return the breadcrumb array mounted to create the track
    **/
    mountBreadcrumb() {
        console.log("entrou")
        /** pliting and removing empty spaces of the array  **/
//        let paths = this.state.path.split('/').filter((e) => { return e });
        let paths = this.props.path.split('/').filter((e) => { return e });
        if(paths.length == 0) return
        console.log(paths)

        return (

            /**  converting an complex string to all uppercase initials  **/
            paths.map((crumb, i, arr) => {
                let word = crumb.split("-").join(" ").split("")

                
                word.map((x, i, arr) => {//splitin an already splitted path and replacing it to uppercase
                    if (x === " ") {
                        arr[i + 1] = arr[i + 1].toUpperCase();
                    }
                })

                let sentence = word.join("").replace(/([A-Z])/g, " $1");
                let finalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

                if ((arr.length - 1) === i) {
                    /** returning the last element with the class witch represents it **/
                    return (
                        <h4 className="last-crumb" key={crumb + i}>
                            <span>/</span>
                            {finalSentence}
                        </h4>
                    )
                } else if ((i > 0) && (i < (arr.length - 1))) {
                    /**  adding the / as prefix to the element witch is not the first nor the last one **/
                    return (
                        <h4 id={`/${crumb}`} onClick={this.navigateTo} key={crumb + i}>
                            <span>/</span>
                            {finalSentence}
                        </h4>
                    )
                }
                /**  adding the / to the normal element on the bread track :)  **/
                return (
                    <h4  id={`/${crumb}`} onClick={this.navigateTo} key={crumb + i}>
                        {finalSentence}
                    </h4>

                )
            })
        )
    }

    render() {
        console.log(this.props)

        /** don't render the component if the user is in the Home Page - HomeBody**/
        if (this.props.path === "/home") return null
        return (
            <div className="breadcrumb__container">
                {this.state.path === '/home' ? null : this.mountBreadcrumb()}
            </div>
        )
    }
}