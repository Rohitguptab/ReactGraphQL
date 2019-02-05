import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Blogs from "./components/Blogs";
import BlogInner from "./components/BlogInner";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>
            <a href="/">Blog Data Main</a>
          </h1>
        </div>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Blogs} />
              <Route path="/:id" component={BlogInner} />
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
