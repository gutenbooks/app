import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import withTracker from './components/withTracker';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import BookShow from './pages/BookShow';

const App: React.FC = () => {
  return (
    <Router>
       <Navbar bg="light" expand="lg" className="mb-3">
          <div className="container">
            <Navbar.Brand href="/">Gutenberg</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
         </div>
       </Navbar>

         {/*
           A <Switch> looks through all its children <Route>
           elements and renders the first one whose path
           matches the current URL. Use a <Switch> any time
           you have multiple routes, but you want only one
           of them to render at a time
         */}
         <Switch>
           <Route exact path="/" component={withTracker(Home)} />
           <Route exact path="/books/:id" component={withTracker(BookShow)} />
           <Route path="/search" component={withTracker(Search)} />
           <Route path="/about" component={withTracker(About)} />
         </Switch>

        <Footer />
     </Router>
  );
}

export default App;
