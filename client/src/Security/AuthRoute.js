import React from 'react';
import { Route, Redirect } from "react-router-dom"


function AuthRoute({ authenticated, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (<Component {...props} />) :
                    (<Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />)
            }
        />
    )
}

export default AuthRoute
