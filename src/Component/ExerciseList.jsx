import Axios from "axios";
import React, { useEffect, useState } from "react";
import Exercises from "./Exercises";
//  import CreateExercise from "./CreateExercise";




function ExerciseList(){

const[exerciseList, setExerciseList]= useState({
    exercise: []
})


 useEffect(()=>{
    
    Axios.get("http://localhost:5000/exercise/").then( response =>{
        setExerciseList(()=>{
            return{ 
        
               exercise: response.data 
            }
           
   })
        
    }
      ).catch((error)=>console.log(error))
    
 
 },[ ])

function deleteExercise(id){
    Axios.delete("http://localhost:5000/exercise/" +id)
    .then( res =>console.log(res.data))
    setExerciseList((prev)=>{
            return{  ...prev,
                  exercise: exerciseList.exercise.filter(el=> el._id !==id)
            }
    })
    
    } 


console.log(exerciseList)





return(
    <div className="container mt-5">
     <h2>Logged Exercise</h2>
     <table className= "table table-light table-hover  ">
         <thead>
             <tr>
                 
                 <th scope="col">Name</th>
                 <th scope="col">Exercise</th>
                 <th scope="col">Duration</th>
                 <th scope="col">Date</th>
                 <th scope="col">Action</th>
             </tr>
         </thead>
          {exerciseList.exercise.map((item, index)=>{
                 return (<Exercises
                    key={index+1}
                    id={item._id}
                    name={item.username}
                    desc={item.description}
                    duration={item.duration}
                    date={item.date.substring(0, 10)}
                    onDelete={deleteExercise}
                 />
                
                 
                 )
             })}
        
     
     </table>
    </div>
);
};


export default ExerciseList;
                  