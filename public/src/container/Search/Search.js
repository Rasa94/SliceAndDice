import React from 'react';
import './search.css'
import {SearchBar} from '../../components/SearchBar/SearchBar'

export class Search extends React.Component {
    

    render() {
        return (
            <div className='searchContainer'>
                <div className='searchContainer__banner'></div>
                <SearchBar />
                
            </div>
        )
    }
}