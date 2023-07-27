//
//
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { useKeycloak } from "@react-keycloak/web";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navigation = () => {
    const { keycloak, initialized } = useKeycloak();

    const handleLogin = () => {
        keycloak.login();
    };

    const handleLogout = () => {
        keycloak.logout();
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">Keycloak React Auth</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/secured">Secured Page</Nav.Link>
                    </Nav>
                    <Nav>
                        {keycloak.authenticated ? <LogoutButton
                            onClick={handleLogout}
                            username={keycloak.tokenParsed.preferred_username}
                        /> : <LoginButton
                            onClick={handleLogin}
                        />}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;