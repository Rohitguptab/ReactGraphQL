import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Blogs from './components/Blogs';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Blog Data Main</h1>
        </div>
        <Blogs />
      </ApolloProvider>
    );
  }
}

export default App;
