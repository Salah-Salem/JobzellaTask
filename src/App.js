import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Comunity, Courses, Projects, Details, Profile } from './pages';


export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.PROFILE}>
        <Profile />
      </Route>
       <Route exact path={ROUTES.COMUNITY}>
        <Comunity />
      </Route>
      <Route exact path={ROUTES.COURSES}>
        <Courses />
      </Route>
      <Route exact path={ROUTES.PROJECTS} >
        <Projects />
      </Route>
      <Route exact path={ROUTES.DETAILS}>
        <Details />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
