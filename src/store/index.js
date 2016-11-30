import { createStore } from 'redux';

import reducer from '../reducers';

export default createStore(reducer);

if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer(require('../reducers').default);
  });
}
