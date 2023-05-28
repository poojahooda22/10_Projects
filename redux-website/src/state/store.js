import {applyMiddleware} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"
import { createStoreHook } from "react-redux";

export const store = createStoreHook(reducers, {}, applyMiddleware(thunk));