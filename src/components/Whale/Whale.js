import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1];
  // const { type } = useParams();
  const { path } = useRouteMatch();

  return (
    <>
      <h2>Whale</h2>
      {/* {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />} */}
      <Switch>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>

    </>
  );
}