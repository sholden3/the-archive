// We want to do a default export of our JSON structure
export default {
    clientId: '0oa3rjv549UGIW7UF5d7', // public identifier of client app
    issuer: 'https://dev-47683534.okta.com/oauth2/default', // issuer of tokens, URL when authorizing with Okta Authorization Server
    redirectUri: window.location.origin + '/login/callback', // Once user logins, redirect here
    scopes: ['openid', 'profile', 'email', 'group'] // Our access to information about a user. 
    // Openid required for authentication requests. 
    // Profile user's profile info
    // Email user's email
}
