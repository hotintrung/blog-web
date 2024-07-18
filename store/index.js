// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import activitiesReducer from './activities/slice';
import educationReducer from './education/slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    activities: activitiesReducer,
    education: educationReducer
  },
});

export default store;
