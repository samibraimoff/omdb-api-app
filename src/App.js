import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movie/:imdbId' component={MovieDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
