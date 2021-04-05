import React from 'react';
import axios from 'axios';
import './searchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            query: '',
            results: []
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ query: e.target.value })
    }

    onSubmitHandler = async(e) => {
        e.preventDefault();
        axios.get(`sliceanddice/search/${this.state.query}`)
            .then(data => console.log(data.data.data))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' id='recipeSearch' placeholder='Search for a recipe...' value={this.state.query} onChange={this.onChangeHandler} />
            </form>
        )
    }
}