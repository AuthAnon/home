import 'normalize.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouteHelper } from './components/RouteHelper';
import { App } from './components/App';
import { Loading } from './components/Loading';
import { Home } from './components/Home';
import { ManageLazy } from './components/ManageLazy';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <RouteHelper />
      <App>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={'/manage'}>
              <ManageLazy />
            </Route>
            <Route path={'*'}>
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
