import logo from './logo.svg';
import './App.css';
 
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromise = ['Trybe', 'Dormir tarde', 'tarefas domesticas']
  return (
    <>
      <ul>
        <li>{compromise.map((item) => Task(item))}</li>
      </ul>    
    </>
  )
}

export default App;
