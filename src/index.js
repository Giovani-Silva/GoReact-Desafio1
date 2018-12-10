import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import './style.scss'

import Header from './Header'
import Post from './Post'

class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Giovani Silva',
        moment: 'few seconds ago',
        body:
          'Ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'
      },
      {
        id: Math.random(),
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Nanda Almeida',
        moment: '10 min ago',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, natus! Nesciunt nemo molestiae perspiciatis ipsam eaque eum cum natus. '
      }
    ]
  }

  getPosts = () => {
    return this.state.posts.map(post => <Post key={post.id} {...post} />)
  }
  render () {
    return (
      <Fragment>
        <Header />
        {this.getPosts()}
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
