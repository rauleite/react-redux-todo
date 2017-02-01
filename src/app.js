import { Provider } from 'react-redux'
import React from 'react'
import { TodoList } from './containers'
import { createStore } from 'redux'
import reducer from './reducer'
import { render } from 'react-dom'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
)
