import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute ({component: Component, ...props}) {
  console.log(props.isLoggedIn)
  return(
    <Route>
      {props.isLoggedIn ? <Component {...props} /> : <Redirect to='/signin' />}
    </Route>
  )
}

export default ProtectedRoute;
