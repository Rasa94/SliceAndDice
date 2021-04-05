import React from 'react';
import {TableRow} from './../../components/TableRow/TableRow'
import './recipes.css';
import axios from 'axios';

export class Recipes extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            recepies: []
        };
    }

    componentDidMount() {
        axios.get(`sliceanddice/`)
            .then(recipe => {
                console.log(recipe.data.data);
                this.setState({
                    recepies: [...this.state.recepies, ...recipe.data.data]
                })
            })
        console.log(this.state.recepies)
    }

    // Add td keys

    render() {
        return (
            <div className="recipes">
                <div className='recipes__banner'></div>
                <table>
                    <tbody>
                        <tr key='13424252'>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Ingredients</th>
                            <th>Steps</th>
                        </tr>
                        {this.state.recepies.map(e => <TableRow keyProp={e._id} name={e.name} description={e.description} ingredients={e.ingredients} steps={e.steps} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
