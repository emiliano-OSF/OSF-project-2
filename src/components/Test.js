import React, { Component } from 'react';

class Teste extends Component {
    render() {
        const number = [...Array(100).keys()];
        console.log(number);
        return (
            <div>
                {number.map(el =>
                    <h4>{el}</h4>
                )}
            </div>
        )
    }
}

export default Teste;