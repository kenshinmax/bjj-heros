import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { NotFoundPage } from '../notfound'
import Layout from '../../components/Layout'
import Home from '../home'
import About from '../about'
import Detail from '../hero'
import CreateHero from '../create'

import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

const renderHero = ({ match, staticContext }) => {
  const id = match.params.id;
  return <Detail id={id}/>;
};

const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route path="/hero/:id" component={renderHero} />
    <Route exact path="/create" component={CreateHero} />  
  </Layout>
)


export default withAuthenticator(App, true);