import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './components/Login';
import Signup from './components/SignUp';
import ExerciseList from './components/ExerciseList';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: "100px",
    height: "100%"
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
      <div className="container">
        <Header />
        <br/>
        <PrivateRoute path="/landing" exact component={Landing} />
        <PrivateRoute path="/exercises" exact component={ExerciseList} />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/signup" exact component={Signup} />
      </div>
    </Router>
    </div>
  );
}

export default App;
