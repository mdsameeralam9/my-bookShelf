import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import Search from './Search';

const Header = () => {
    const [showSearch, setShowSearch] = useState(true);

    return (
        <div className='headerComponent'>
             <Link to="/" onClick={() => setShowSearch(prevState => !prevState)}>
             <IoBookSharp className={`brandIcon ${showSearch && 'visHidden'}`} style={{fontSize: "3rem"}}/>
            </Link>
    
            {showSearch && <Search />}
            <Link to="/booksShelf" className='headerRight' onClick={() => setShowSearch(false)}>
                <SiBookstack className='brandIcon' style={{fontSize: "1.5rem"}}/>
                <span className='headerRLabel'>My BookShelf</span>
            </Link>
        </div>
    )
}

export default Header;
