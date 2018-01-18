import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { NotFoundPage } from '../notfound'
import Home from '../home'
import About from '../about'
import Detail from '../hero'
 
const renderHero = ({ match, staticContext }) => {
  const id = match.params.id;
  console.log("Render hero!!" + id)
  return <Detail />;
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
      <Route path="/hero" component={renderHero} />
      
    </main>   
  </Layout>
)
export default App;