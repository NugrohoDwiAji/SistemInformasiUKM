import React from 'react'
import { Route,redirect } from 'react-router-dom'
import { isAuthenticated } from './auth.services'

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route>
        {...rest}
        render={props =>
        isAuthenticated()?(
            <Component{...props}/>
        ):(
           redirect("/")
        )}
    </Route>
  )
}

export default PrivateRoute