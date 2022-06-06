import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import { sessionService } from "redux-react-session";

const initialState = {};
const middlewares = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: compose(applyMiddleware(...middlewares)),
  initialState,
});

sessionService.initSessionService(store);

export default store;
