import React, { Component } from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    //console.log(props)
    let rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeItem(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {

        const { characterData, removeItem } = this.props
        //console.log(this.props);

        return (
            <table>
                <TableHead />
                <TableBody characterData={characterData} removeItem={removeItem} />
            </table>
        )
    }
}

export default Table