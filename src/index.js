import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import './style.scss'

import Header from './Header'
import Post from './Post'

class App extends Component {
  state = {
    posts: []
  }
  render () {
    return (
      <Fragment>
        <Header />
        <Post />
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
