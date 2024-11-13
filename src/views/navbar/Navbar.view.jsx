import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect } from "react";

import "./Navbar.style.scss";
import navbarLogo from "../../assets/images/LogoNavbar.png";


const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [currentPath, setCurrentPath] = useState('feed');
    const navigate = useNavigate();

    const handlerSelectedSection = (section) => {
        setCurrentPath(section);
        // localStorage.setItem('selectedSection', section);
        if (section === "Home") navigate("/")
        else{
            navigate(section.toLowerCase())
        }

    }

    return(
        <div className="App">
            <div className="Navigation">
                <div className="logo">
                    <img src={navbarLogo} alt="Logo" />
                </div>

                {!loggedIn ?
                    <div className="authentification">
                    <a href="/login">
                         <button className='login'>Log in</button>
                         </a>
                          <a href="/register">
                          <button className='register'>Register</button>
                            </a>
                    </div>
                :
                    <Fragment>
                        
                    <div className="mid_section">
                        <button 
                            className={'feed' + (currentPath=='feed'?' selected':'')}
                            onClick={() => handlerSelectedSection('feed')}>
                                Feed
                        </button>
                        <button 
                            className={'explore' + (currentPath=='explore'?' selected':'')}
                            onClick={() => handlerSelectedSection('explore')}>
                                Explore
                        </button>
                        <button 
                            className={'planner' + (currentPath=='planner'?' selected':'')}
                            onClick={() => handlerSelectedSection('planner')}>
                                Planner
                        </button>
                        <button 
                            className={'shoppingList' + (currentPath=='shoppingList'?' selected':'')}
                            onClick={() => handlerSelectedSection('shoppingList')}>
                                Shopping List
                        </button>
                    </div>

                    <div className="end_section">
                        {/* <button className='search'>Search</button> */}
                        <button className='profile'>Profile</button>
                    </div>

                    </Fragment>

                    
                }
                
            </div>
            <Outlet />
        </div>
    )

};

export default Navbar;