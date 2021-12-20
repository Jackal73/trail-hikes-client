import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import NewHike from './hikes/pages/NewHike';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';


const App = () => {
  return (
    <Router>
    <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/hikes/new" exact>
            <NewHike />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
