import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {


    /* State from line 21 created and stored here */
    constructor(props){
        super(props); 
        this.state = {
            isNavOpen: false
        };
    /* bind toggleNav on line 33 to method on line 19 */
        this.toggleNav = this.toggleNav.bind(this); 
    }
    /* Method for line 33 here 
        When executed, value for isNavOpen is swaped 
    */
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                {/* Navbar Links here shown only for md-lg screen sizes*/}
                <Navbar dark expand="md">
                    <div className="container">
                {/* NavLinks expanded and shown here with NavbarToggler */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                {/* Collapse if screen extrasmall or small */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/home"></NavLink>
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/aboutus"></NavLink>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/menu"></NavLink>
                                        <span className="fa fa-list fa-lg"></span> Menu
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/contactus"></NavLink>
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavItem>
                            </Nav>
                            </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container"> 
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header; 