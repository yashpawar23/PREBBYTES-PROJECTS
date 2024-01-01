import './App.css';
import PostData from './Feature/ApiData/PostData';
import CounterValue from './Feature/Counter/CounterValue';
import TodoListData from './Feature/ToDolist/TodoListData';

function App() {
  return (
    <div className="App">
      App
      {/* <PostData/> */}
      <CounterValue/>
      <TodoListData/>
    </div>
  );
}

export default App;
