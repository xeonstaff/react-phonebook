import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Phonebook, Contact, About, SignIn } from './components'
import './styles.css'

import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';

import { Provider } from 'react-redux';
import { store } from './redux/store'
const temp_props = "a beautiful Phonebook"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home title={temp_props} />
            </Route>
            <Route path='/phonebook'>
              <Phonebook></Phonebook>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/signin'>
              <Suspense fallback={'loading...'}>
                <SignIn />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);