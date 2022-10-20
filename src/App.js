import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Registration from './components/Registration';
import Home from './components/Home';
import Question from './components/Question';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>   
       <div className='App'>
            < Registration />
       </div>
    </>   
  );
}


export default App;
