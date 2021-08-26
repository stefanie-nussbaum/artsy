import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
      <Switch>
        <Route path='/login'>
          <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
