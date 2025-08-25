import MainTodo from "./components/MainTodo";
import {AppDataProvider} from "./components/NewContext";

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
