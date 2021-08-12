import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Layout from "../src/components/Layout"

// import UsersContainer from './components/UsersContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <Layout/>
        {/* <UsersContainer /> */}
       
      </div>
    </Provider>
  )
}

export default App
