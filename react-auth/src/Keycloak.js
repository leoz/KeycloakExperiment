import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: process.env.REACT_APP_SERVER_URL,
    realm: process.env.REACT_APP_REALM_ID,
    clientId: process.env.REACT_APP_CLIENT_ID
});

export default keycloak;