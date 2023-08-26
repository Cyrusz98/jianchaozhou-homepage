// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // 假设这是您的主页组件
import Dailylife from './Dailylife'; // 假设这是您的 Dailylife 组件

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dailylife" component={Dailylife} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
