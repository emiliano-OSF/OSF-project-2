import React, { Component } from 'react';
import Table from './Table';

class App extends Component {

    state = {
        character: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }

    removeItem = index => {
        const { character } = this.state;
        //console.log(character)

        this.setState({
            character: character.filter((character, i) => {
                return i !== index;
            }),
        })
    }

    render() {
        const { character } = this.state;
        //console.log(this.state)

        return (
            <div className="container">
                <Table characterData={character} removeItem={this.removeItem} />
            </div>
            // essas prorpiedades acima sao passadas do pai (App) para o filho (Table)
            // o nome dos atributos devem ser iguais do outro lado (em Table)
        )
    }
}

export default App