import React, { Fragment } from 'react'
import { render } from 'react-dom'

import './style.scss'

const App = props => (
  <Fragment>
    <h1>React</h1>
    <p>
      Estrutura ReactJS do zero com Babel, Webpack, Webpack Dev Server, ESLint,
      EditorConfig e Prettier.
    </p>
  </Fragment>
)
render(<App />, document.getElementById('app'))
