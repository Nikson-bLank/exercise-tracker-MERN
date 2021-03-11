import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from '@material-ui/icons/Edit';



export default function Exercises(props) {

    return (<tbody>
        <tr>
        
            <td>{props.name}</td>
            <td> {props.desc}</td>
            <td>{props.duration}</td>
            <td>{props.date}</td>
            <td><Link className="link" to={"/edit/" +props.id} ><EditIcon style={{cursor: "pointer", color: "#212529"}} /></Link> | <DeleteIcon style={{cursor: "pointer"}} onClick={()=>props.onDelete(props.id)}  /></td>
        </tr>

    </tbody>);


}