import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { UserContext } from './App';
import Login from './pages/Login';

interface Props {

}

const Routes = <>
  <Route path="/login" component={Login} />
</>

const Root: React.FC = () => {
  const { context: { user: { email } } }: any = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!email && window.location.pathname !== '/login') {
      window.location.pathname = '/login';
    }
    setLoading(false);
  }, [email])
  return (
    <Router>
      {loading? '': Routes}
    </Router>
  )
}

export default Root;