import { configureStore  } from '@reduxjs/toolkit';
import  reducer  from './reducers/';

const store = configureStore({ 
    reducer: reducer 
}) 

   // typeof window === 'object' &&
   //     typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
   //     window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
   // )
// );

export default store;
