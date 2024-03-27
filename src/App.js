import "./App.css";
import { Message } from "./components/message.jsx";

function App() {
  return (
    <>
      <h1 className="appstyle"> Hello world! _App.js_</h1>
      <Message message="First props" style="messages1" />
      <Message message="Second props" style="messages2" />
      <Message message="Third props" style="messages3" />
    </>
  );
}

export default App;
