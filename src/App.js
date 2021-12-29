import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import NewHike from './hikes/pages/NewHike';
import UserHikes from './hikes/pages/UserHikes';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UpdateHike from './hikes/pages/UpdateHike';
import Auth from './user/pages/Auth';

const App = () => {
  return (
    <Router>
    <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/hikes" exact>
            <UserHikes />
          </Route>
          <Route path="/hikes/new" exact>
            <NewHike />
          </Route>
          <Route path="/hikes/:hikesId">
            <UpdateHike />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
