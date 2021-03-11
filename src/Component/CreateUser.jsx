
import React, { useState }  from "react";
import axios from "axios";



function CreateUser() {
    const [user, setUser] = useState({
   
          username: ""    
        })
    
    
       
      
    
        function handleChange(events){
            const newValue = events.target.value;
            const name = events.target.name;
           
            setUser((prev)=> {
                return{
                   ...prev,
                   [name]:newValue
                }
            })
        
    
        }
       
     
        function handleClick(e){
              e.preventDefault();
              
              setUser(user)
             console.log(user);
    axios.post("http://localhost:5000/user/add", user).then(res => console.log(res.data));
             setUser({
                 username: ""
             })

        
            }







    return (
        <React.Fragment>
           <div className= "container mt-5">
           <div className= "center mt-5">
            <form>
                <div className="form-group">
                    <h4 className="mb-3">Add User</h4>
                    <input   
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="username"
                   value={user.username}
                    autoComplete="off"
                    onChange={handleChange}
                    >
                    </input>
                </div>
                <button className=" btn btn-dark btn-lg"  onClick={handleClick}> Create User</button>
            </form>
            </div>
            </div>

        </React.Fragment>

    );


};


export default CreateUser;
