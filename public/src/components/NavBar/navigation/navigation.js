import { Link } from 'react-router-dom';

export const RegularMenu = () => {
    return (
        <div className='navigation'>
            <Link to="/" className='navButton'>Home</Link>
            <Link to="/add" className='navButton'>Add New</Link>
            <Link to="/recipes" className='navButton'>Your Recipes</Link>
        </div>
    )
}