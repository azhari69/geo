import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Jelajah from './components/jelajah';
import Pencarian from './components/pencarian';
import Berita from './components/berita';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <Routes>

      <Route path="/" exact component={Home} />
      <Route path="/jelajah/" component={Jelajah} />
      <Route path="/pencarian/" component={Pencarian} />
      <Route path="/berita/:id" component={Berita} />

    </Routes>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
