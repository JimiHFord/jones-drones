import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import createHistory from "history/createBrowserHistory";
import Shell from './Shell';
import Home from './components/Home';
import MeetTheTeam from './components/meet-the-team';
// import './App.css';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-99351059-1');
}

const history = createHistory();
const recordPageView = location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};
const removePageChangeListener = history.listen(recordPageView);
recordPageView(window.location);

class App extends Component {
  render() {

    const routeSwitcher = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meet-the-team" component={MeetTheTeam} />
      </Switch>
    );

    return (
      <Router history={history}>
        <Shell>
          {routeSwitcher}
        </Shell>
      </Router>
    );
  }
}

export default App;
