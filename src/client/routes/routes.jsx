import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PAGES } from './pages';
import App from '../components/app/app';
import HomePage from '../components/home-page/home-page';
import Statistic from '../components/Statistic/Statistic';
import Page404 from '../components/page404/page404';
import Trades from '../components/trades';
import Statiscic from '../components/statistics';
import Settings from '../components/settings';


const WrappedApp = (Component, props) => (
  <App>
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    <Route
      exact path={ PAGES.home.path }
      render={ props => WrappedApp(HomePage, props) }
    />
    <Route
      exact path={ PAGES.statistic.path }
      render={ props => WrappedApp(Statiscic, props) }
    />
    <Route
      exact path={ PAGES.trades.path }
      render={ props => WrappedApp(Trades, props) }
    />
    <Route
      exact path={ PAGES.settings.path }
      render={ props => WrappedApp(Settings, props) }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
  </Switch>
);
