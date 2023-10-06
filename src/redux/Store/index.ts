import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from "redux-persist/lib/storage";
//combine reducers
import combineReducers from "../combineReducer";

const persistConfig = {
  key: 'reducer',
  storage: storage,
  whitelist: [
    'userReducer',
  ],
  blacklist: []
};

const presistedReducer = persistReducer(
  persistConfig,
  combineReducers
);

const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };