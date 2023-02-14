import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { AuthContext } from '../Context/UserContext';
const NavigationBar = () => {
    const {user,signOutUser,setUser}=useContext(AuthContext)
    const handleSignOut=()=>{
        signOutUser()
        .then(result=>{
            setUser('')
        })
    }
    return (

        <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex:9}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand">
                    <h1 className="m-0 text-Warning"><span className="text-dark">Artho-TREV</span>ELS</h1>
                </a>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto py-0">
                    <Link to='/' className='nav-item nav-link'>Home</Link>
                        <Link to='/services' className='nav-item nav-link'>Services</Link>
                    <Link to='/about' className='nav-item nav-link'>About</Link>
                         {
                            user ? <Link to='/userReview' className='nav-item nav-link'>My reviews</Link>
                            :
                            <Link to='/contact' className='nav-item nav-link'>Sign In</Link>

                         }
                        <ReactTooltip anchorId="my-element" />
                        {
                            user && <> <div className='avatar' id="my-element" data-tooltip-content={user?.displayName}><img src={user?.photoURL} alt="" className="img-fluid avatar-img" /></div>
                            <button className="btn btn-warning signOut" onClick={handleSignOut}>Sign Out</button>
                            </>
        
                        }

                       
                      

                  
                    </div>
                    
                </div>
            </nav>
        </div>
    </div>
    );
};

export default NavigationBar;