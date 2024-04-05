import "./App.css";
// import Counter from "./components/Counter.jsx";
// import Greeting from "./components/Greeting.jsx";
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

// import { CommentsList } from "./components/CommentsList.jsx";

function App() {
  // const name = "John123";
  return (
    <>
      <div>
        {/* <h1 className="appstyle"> Hello world! _App.js_</h1> */}
        <TemperatureConverter />
        <TodoList />
      </div>
    </>
  );
}

export default App;
