//
//
import React from "react";
import Button from 'react-bootstrap/Button';

const LogoutButton = ({ onClick, username }) => {
    return (
        <Button
            variant="secondary"
            onClick={onClick}
        >
            Logout ({username})
        </Button>
    );
}

export default LogoutButton;
