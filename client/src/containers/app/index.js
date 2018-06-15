import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { NotFoundPage } from '../notfound'
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
    <div className="main-app-nav">
     <Link to="/">Home</Link>
     <Link to="/about-us">About</Link>
     <Link to="/create">Create</Link>
    </div>

	  <main>
	    <Route exact path="/" component={Home} />
	    <Route exact path="/about-us" component={About} />
      <Route path="/hero/:id" component={renderHero} />
      <Route exact path="/create" component={CreateHero} />
    </main>   
  </Layout>
)


export default withAuthenticator(App, true);