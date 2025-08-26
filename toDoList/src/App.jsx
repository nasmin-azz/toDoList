import MainTodo from "./components/MainTodo";
import {AppDataProvider} from "./components/NewContext";
import { BrowserRouter } from "react-router";


function App() {
  return (
    <AppDataProvider>
      <div>
        <MainTodo />
      </div>
    </AppDataProvider>
  );
}

export default App;
