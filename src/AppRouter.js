// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskForm from './components/TaskForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaskForm} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
