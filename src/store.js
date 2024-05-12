import { createStore } from "redux";
import cartReducer from "./redux/Reducer";

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 