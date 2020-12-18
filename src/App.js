import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import WorkoutCreate from './components/WorkoutCreate/WorkoutCreate';
import WorkoutEdit from './components/WorkoutEdit/WorkoutEdit';
import UserCreate from './components/UserCreate/UsersCreate';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={WorkoutList} />
        <Route path="/edit/:id" component={WorkoutEdit} />
        <Route path="/create" component={WorkoutCreate} />
        <Route path="/user" component={UserCreate} />
      </div>
    </Router>
  );
}

export default App;
