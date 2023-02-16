import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { AuthContext } from '../Context/UserContext';
function Menu() {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser().then((result) => {
      setUser('');
    })
  }
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">World-Explore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          
              <Link to='/' className='nav-item nav-link'>
                Home
              </Link>
              <Link to='/services' className='nav-item nav-link'>
                Services
              </Link>
              <Link to='/about' className='nav-item nav-link'>
                About
              </Link>
              <Link to='/blog' className='nav-item nav-link'>
                Blog
              </Link>
              {user ? (
                <>
                  <Link to='/userReview' className='nav-item nav-link'>
                    My reviews
                  </Link>
                  <Link to='/addService' className='nav-item nav-link'>
                    Add Service
                  </Link>
                </>
              ) : (
                <Link to='/contact' className='nav-item nav-link'>
                  Sign In
                </Link>
              )}
              <ReactTooltip anchorId='my-element' />
              {user && (
                <>
                  {' '}
                  <div
                    className='avatar'
                    id='my-element'
                    data-tooltip-content={user?.displayName}
                  >
                    <img
                      src={user?.photoURL}
                      alt=''
                      className='img-fluid avatar-img'
                    />
                  </div>
                  <button
                    className='btn btn-warning signOut'
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </>
              )}
          
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Menu;
