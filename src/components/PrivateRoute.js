import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import {UserSession} from '../context/UserProvider'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {user, loading} = UserSession();

    return (
        <Route {...rest} render={props =>(
        !user ? <Navigate to={{
          pathname: "/auth",
          state: { from: props.match.params.id }
        }} /> : (<Component {...props} />)
      )}
    />
    )
}

export default PrivateRoute