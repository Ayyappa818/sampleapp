import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Todolist from './components/todolist';


function App() {
  return (
    <div className='border border-2 border-secondary m-2 p-2'>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
