import React from 'react';
import staticRoutes from './staticRoutes';
import { Error404 } from '../views';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { Layout } from '../layouts';

export default function RenderRoutes() {
  return (
    <HashRouter basename="/">
      <ScrollToTop>
        <Switch>
          {/* Render the staticRoutes */}
          {staticRoutes.map((prop, key) => {
            const Component = prop.component;
            return (
              <Route
                exact
                path={prop.path}
                key={key}
                render={props => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
                name={prop.name}
              />
            );
          })}
          <Route
            name="404"
            render={props => (
              <Layout>
                <Error404 {...props} />
              </Layout>
            )}
          />
          ;
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}
