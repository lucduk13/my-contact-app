import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contacts from './components/Contacts';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/contacts" component={Contacts} />
    </Router>
  );
};

export default App;