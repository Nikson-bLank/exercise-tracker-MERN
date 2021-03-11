import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";





function EditExercise() {


    const [exercises, setExercises] = useState({

        username: "",
        description: "",
        duration: 0,
        date: new Date().toLocaleDateString(),
        users: []
    })

    const { id } = useParams();

    useEffect(() => {

        Axios.get("http://localhost:5000/exercise/" + id).then(
            res => {
                setExercises((prev) => {
                    return {
                        ...prev,
                        username: res.data.username,
                        description: res.data.description,
                        duration: res.data.duration,
                        date: new Date(res.data.date),

                    }

                })
            }
        )

        Axios.get("http://localhost:5000/user").then(
            response => {
                if (response.data.length > 0)
                    setExercises((prevExercise) => {
                        return {
                            ...prevExercise,
                            users: response.data.map(user => user.username),

                        }
                    })
            }
        )
    }, [id])




    function handleChange(events) {
        const { name, value } = events.target;

        setExercises((prevExercise) => {
            return {
                ...prevExercise,
                [name]: value
            }
        })

    }


    function handleClick(e) {
        e.preventDefault();

        setExercises(exercises)
        console.log(exercises);

        Axios.post("http://localhost:5000/exercise/update/" + id, exercises).then(res => console.log(res.data));


        window.location = "/"

    }

    return (


        <div className="container mt-5">
            <div className="center">
                <h4>Edit Exercise</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Select User</label>
                        <select className="form-control " name="username" onChange={handleChange} value={exercises.username} >
                            {exercises.users.map((user, index) => {
                                return <option style={{ color: "black" }} key={user} id={index}>{user}</option>
                            })}
                        </select>

                        <label>Exercise</label>
                        <input type="text" className="form-control" name="description" value={exercises.description} onChange={handleChange} ></input>

                        <div className="form-group">
                            <label htmlFor="duration">Duration (in minutes)</label>
                            <input type="Number" className="form-control" name="duration" value={exercises.duration} onChange={handleChange}></input>
                        </div>

                        <label>Date</label>
                        <input type="Date" className="form-control" onChange={handleChange} value={exercises.date} name="date"></input>



                    </div>

                    <button className=" btn btn-dark " onClick={handleClick} > Update Exercise</button>
                </form>
            </div>

        </div>
    );

};


export default EditExercise;
