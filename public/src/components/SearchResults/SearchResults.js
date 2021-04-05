import React from 'react';

export class SearchResults extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        <table>
            <tbody>
                <tr key='3435353'>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Ingredients</th>
                    <th>Steps</th>
                </tr>
                {/* {this.state.recepies.map(e => <TableRow keyProp={props._id} name={props.name} description={props.description} ingredients={props.ingredients} steps={props.steps} />)} */}
            </tbody>
        </table>
    }
}