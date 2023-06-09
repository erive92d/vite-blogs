import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './pages/Profile/Profile';
import SinglePost from './pages/SinglePost';

const httpLink = createHttpLink({
  uri: '/graphql',
});

//test

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Nav />
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/me"
              element={<Profile />}
            />
            <Route
              path="/posts/:postId"
              element={<SinglePost />}
            />
          </Routes>
        </div>


      </Router>
    </ApolloProvider>
  )
}

export default App
