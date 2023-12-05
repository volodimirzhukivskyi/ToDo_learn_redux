import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/reducer"
import thunkMiddleware from 'redux-thunk'

import loggerMiddleware from 'redux-logger'

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, loggerMiddleware]
  const middlewareEnhacer = applyMiddleware(...middlewares)

  const composedEnhancers = composeWithDevTools(middlewareEnhacer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducer', () => store.replaceReducer(rootReducer))
  }

  return store
}