import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App } from 'containers';
import {HomePage} from '../containers/Home/HomePage';
import {AboutPage} from '../containers/About/AboutPage';
import {PropertyList} from '../containers/Properties/Property-List';
import {Card} from '../containers/Properties/Card';
import {ContactPage} from '../containers/Contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage}/>
    <Route path="/property" component={PropertyList}/>
    <Route path="/contacts" component={ContactPage}/>
    <Route path="/card/:id" component={Card}/>
  </Route>
);
