import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AddContext } from '../provider/AddContext';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const handler = useContext(AddContext);
  return (
    <Route {...rest} render={
      (props) => {
        if (handler.auth) {
          return <Component {...props} />
        } else {
          return <Redirect to={
            {
              pathname:"/login",
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  );
}