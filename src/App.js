import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NavigationTop from "./components/NavigationTop/NavigationTop";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// import des reducers
import VisibleMenu from "./reducers/getVisibleMenu";

const store = createStore(combineReducers({ VisibleMenu }));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavigationTop />
        <NavigationBar />
      </div>
    </Provider>
  );
}

export default App;
