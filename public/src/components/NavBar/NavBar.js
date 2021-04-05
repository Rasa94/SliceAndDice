import React from 'react';
import { Link } from 'react-router-dom';
import { RegularMenu } from './navigation/navigation';
import { DropdownMenu } from './dropdownNavigation/dropdownNavigation'
import './NavBar.css'

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.menuToggleHandler = this.menuToggleHandler.bind(this);
    }

    menuToggleHandler() {
        console.log(this.state);
        this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true });
    }

    render() {
        return (
            <nav className='navBar'>
                <Link to="/" className='logo'><h1>Slice&Dice</h1></Link>
                <RegularMenu />
                <button className="dropdownBtn" onClick={this.menuToggleHandler}>Menu</button>
                {this.state.isOpen && <DropdownMenu />}
            </nav>
        )
    }
}