import logo from './logo.svg';
import './App.css';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';

function App() {
  return (
    <div>
      <h1 className="text-center">useState Hooks</h1>

      <ClassState />
      <hr />
      <FunctionState />
    </div>
  );
}

export default App;
