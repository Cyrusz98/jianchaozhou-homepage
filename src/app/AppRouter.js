// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // 假设这是您的主页组件
import Dailylife from './Dailylife'; // 假设这是您的 Dailylife 组件
import Projects from './Projects';
import PhotoGallery from './pages/PhotoGallery';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dailylife" component={Dailylife} />
        <Route path="/Projects" component={Projects} />
        <Route path="/projects/gallery" exact component={PhotoGallery} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
