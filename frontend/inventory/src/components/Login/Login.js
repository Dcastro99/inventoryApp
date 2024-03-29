import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated)
    return <Button data-testid='login' sx={styles.menuBoxLink} variant="contained" onClick={() => loginWithRedirect()}> Log In</Button >;
};

export default LoginButton;

const styles = {

  menuBoxLink: {
    color: '#3b3b3b',
    "& button:focus": {
      color: "#3b3b3b"
    },
    "& button:active": {
      color: "black"
    },
    "&:hover ": {
      "background-color": '#a9a9a9'
    },
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
    backgroundColor: '#cd5c5c',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    width: 180,
    height: 35
  }
}