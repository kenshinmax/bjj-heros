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

import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from '../../aws-exports';

Amplify.configure(aws_exports);

const renderHero = ({ match, staticContext }) => {
  const id = match.params.id;
  return <Detail id={id}/>;
};

const App = () => (
  <Layout>
    <header>
     <Link to="/">Home</Link>
     <Link to="/about-us">About</Link>
    </header>

	  <main>
	    <Route exact path="/" component={Home} />
	    <Route exact path="/about-us" component={About} />
      <Route path="/hero/:id" component={renderHero} />
    </main>   
  </Layout>
)


export default App;