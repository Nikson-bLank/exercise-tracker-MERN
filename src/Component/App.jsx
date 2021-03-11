import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import CreateUser from "./CreateUser";
import CreateExercise from "./CreateExercise";
import ExerciseList from "./ExerciseList";
import EditExercise from "./EditExercise";
import Footer from "./Footer"




function App(){

return(
    <React.Fragment>
      
      <Navbar />
   <br/>
      <Switch>
      
     
        <Route path="/user" component={CreateUser}/>
        <Route exact path="/" component={ExerciseList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" component={CreateExercise}/>
      
      </Switch>
       
      
      <Footer></Footer>

    </React.Fragment>
);



};



export default App;