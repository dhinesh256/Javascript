import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';

import {
  ApolloProvider,
  ApolloClient,
  //createHttpLink,
  InMemoryCache,

} from '@apollo/client';

// httpLink will connect our ApolloClient instance with the GraphQL API. 
//The GraphQL server will be running on http://localhost:4000

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000/'
// });


//instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
