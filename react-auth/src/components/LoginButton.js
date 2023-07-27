//
//
import React from "react";
import Button from 'react-bootstrap/Button';

const LoginButton = ({ onClick }) => {
    return (
        <Button
            variant="secondary"
            onClick={onClick}
        >
            Login
        </Button>
    );
}

export default LoginButton;
