import './App.css';
import {Container} from 'react-bootstrap'
import ListTask from './components/ListTask';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container-fluid">
    <div className="App">
      <header>
        <h1> To Do App</h1>
      </header>
      <ListTask/>
   </div>
   </div>
  );
}

export default App;
