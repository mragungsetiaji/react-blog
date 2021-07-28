import logo from './logo.svg';
import Nav from './components/navbar/Nav'
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Nav></Nav>
    </Router>
  );
}

export default App;
