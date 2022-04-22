/** Created by BJ Rutledge 
 * 12/12/21
 */
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../../resources/logo_print_transparent.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
const Header = () => {
    return (
      <Navbar  sticky='top'  bg="light" expand="lg" >
        <LinkContainer to="/">
          <Nav.Link >
            <img width={400} src={logo} alt='' className='d-inline-block align-top logo'/>
          </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/TestChart">
              <Nav.Link>Test Chart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default Header; 