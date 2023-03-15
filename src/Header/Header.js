import React from "react";
import "./Header.css";
import Logo from "../Logos/logo-png.png";
// react-bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
// react-router-dom
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__bar">
                <header>
                    <Navbar sticky="top" expand="lg">
                        <Container>
                            {/* Logo */}
                            <Link to={"/"}>
                                <img
                                    className="header__logo"
                                    src={Logo}
                                    alt=""
                                />
                            </Link>
                            {/* adds hamburger menu for mobile */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            {/* Navbar Start */}
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    {/* Navbar Links */}
                                    {/* Home */}
                                    <Nav.Link
                                        as={Link}
                                        to={"/"}
                                        className="header__navLink"
                                    >
                                        Home
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={"/chords"}
                                        className="header__navLink"
                                    >
                                        Chords
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={"/drums"}
                                        className="header__navLink"
                                    >
                                        Drums
                                    </Nav.Link>
                                    <NavDropdown
                                        title="Synths"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item
                                            as={Link}
                                            to={"/synths/lead"}
                                        >
                                            Lead
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            as={Link}
                                            to={"/synths/arp"}
                                        >
                                            Arp
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            as={Link}
                                            to={"/synths/pad"}
                                        >
                                            Pad
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            as={Link}
                                            to={"/synths/bass"}
                                        >
                                            Bass
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
            {/* Allows for elements underneath */}
            <Outlet />
        </div>
    );
}

export default Header;
