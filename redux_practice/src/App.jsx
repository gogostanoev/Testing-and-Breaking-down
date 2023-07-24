import { Counter } from "./Components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./store";
import { AddMovie } from "./Components/AddMovie/AddMovie";
import { Movies } from "./Components/Movies/Movies";

function App() {
  return (
    <>
    {/* Bidejki tuka Counter e wrapped vo Provider, imame pristap na stateot, duri i da e na 20to nivo so useSelector */}
      <Provider store={store}>
        <Counter />

        <br />
        <hr />
        <AddMovie />

        <Movies />
      </Provider>
    </>
  );
}

export default App;
