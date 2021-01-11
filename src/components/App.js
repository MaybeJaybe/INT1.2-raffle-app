import React from 'react';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import reducers from '../reducers'
// import {loadState, saveState} from '../utils'

import Header from './Header'
// import AddName from './AddName'
// import RandomSelect from './RandomSelect'
// import ShowResult from './ShowResult'

import './App.css';

// const persistedState = loadState()
// const store = createStore(reducers, persistedState)
// store.subscribe(() => {
//   saveState(store.getState())
// })

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
