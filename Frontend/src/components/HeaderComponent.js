import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Collapse,
} from "reactstrap";
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';
import "../index.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <span className="nav-logo col-md-2 col-6">
                <NavbarToggler onClick={this.state.toggleNav} />
                  <NavbarBrand className="navbrand" href="/">
                  <img
                    src="assets/logos/fclogo.png"
                    className="main-logo"
                    alt="Future Computer"
                  ></img>
                </NavbarBrand>
              </span>
              <span className="col-md-7 top-head-right">
                <Nav pills>
                <span className="col-md-2">
                    <NavItem>
                    <NavLink
                      activeClassName="active-nav-link"
                      className="nav-link"
                      to="/home"
                      activeStyle={{ color: "#3ebdf3" }}
                      style={{ color: "#ccc" }}
                    >
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </NavItem>
                </span>
                <span className="col-md-2">
                    <NavItem>
                    <NavLink
                      activeClassName="active-nav-link"
                      className="nav-link"
                      to="/tally"
                      activeStyle={{ color: "#3ebdf3" }}
                      style={{ color: "#ccc" }}
                    >
                      <span className="fa fa-inr fa-lg"></span> Tally
                    </NavLink>
                  </NavItem>
                </span>
                <span className="col-md-2">
                    <NavItem>
                    <NavLink
                      activeClassName="active-nav-link"
                      className="nav-link"
                      to="/software"
                      activeStyle={{ color: "#3ebdf3" }}
                      style={{ color: "#ccc" }}
                    >
                      <span className="fa fa-window-restore fa-lg"></span>{" "}
                      Software
                    </NavLink>
                  </NavItem>
                </span>
                <span className="col-md-2">
                    <NavItem>
                    <NavLink
                      activeClassName="active-nav-link"
                      className="nav-link"
                      to="/products"
                      activeStyle={{ color: "#3ebdf3" }}
                      style={{ color: "#ccc" }}
                    >
                      <span className="fa fa-barcode fa-lg"></span> Products
                    </NavLink>
                  </NavItem>
                </span>
                <span className="col-md-2">
                    <NavItem>
                    <NavLink
                      activeClassName="active-nav-link"
                      className="nav-link"
                      to="/aboutus"
                      activeStyle={{ color: "#3ebdf3" }}
                      style={{ color: "#ccc" }}
                    >
                      <span className="fa fa-address-card fa-lg"></span> About
                      Us
                    </NavLink>
                  </NavItem>
                </span>
                </Nav>
              </span>
              <span className="top-header-button offset-1 col-md-2">
                <button className="appointment"><span className="fa fa-phone">&nbsp;</span> Contact Us</button>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
