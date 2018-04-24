import React, { Component } from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './common/Menu'
import { MenuItem } from './common/Menu'
import './App.css';
import { Button, ButtonToolbar, Breadcrumb } from 'react-bootstrap'
import ToDoList from './AddReq/TodoList'
import { BrowserRouter as Router, Switch, Route, Link, BrowserHistory } from 'react-router-dom'
import MemberForm from './memberForm.js'
// import Baby from './baby.jpeg'
const simple = {
  backgroundImage: `url("./simple2.jpg")`,
  // backgroundRepeat:no-repeat,
};

const footerLinks = [
  { name: "Become a member", link: "/theMemberForm" },
  { name: "Members", link: "/" }
]

class App extends Component {
  constructor() {
    super()


  }
  renderHome() {
    return (
      <div className="App">
        <header className="App-header" style={simple}>
          <img className="App-logo" src="/download (1).png" />


          {/* <img className="headerPic" src="/home/nagham/Desktop/test/public/baby.jpeg" /> */}
          {/* <img src="./baby.jpeg" /> */}
          {/* <h1 className="App-title"></h1> */}
          {/* <Menu links={links} /> */}
          {/* <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <ButtonToolbar>
              <Button>Default</Button>
              <Button bsStyle="primary">Primary</Button>
              <Button bsStyle="success">Success</Button>
              <Button bsStyle="info">Info</Button>
              <Button bsStyle="warning">Warning</Button>
              <Button bsStyle="danger">Danger</Button>
              <Button bsStyle="link">Link</Button>
            </ButtonToolbar>; */}
        </header>

        <body className="body">
          <ToDoList/>
        </body>

        <About />
        <div className="App-footer">
          <div className="footerButtons">
            <Menu links={footerLinks} />
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => this.renderHome()} />
          <Route exact path="/the" render={() => this.renderHome()} />
          <Route exact path="/theMemberForm" component={MemberForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
