import React, {useState} from "react";
import {Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import users from "./users";

function Create() {
    let history = useNavigate();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');
    const [age, setage] = useState('');

    const handelSubmit=(e)=>{
       e.preventDefault();
       const ids = uuid();
       let uin = ids.slice(0, 8);
       let a = name,
       b = email,
       c = mobilenumber,
       d = age;

       if(name === "" || email === "" || mobilenumber === "" || age === ""){
          alert("Invalid input");
          return;
       }
       users.push({
         id:uin,
         Name:a,
         Email:b,
         MobileNumber:c,
         Age:d
       })
       history("/")
    }
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Control 
          type="text" 
          placeholder="Enter your name" 
          onChange={(e)=>setname(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Control 
          type="text" 
          placeholder="Enter your Email" 
          onChange={(e)=>setemail(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="MobileNumber">
          <Form.Control 
          type="number" 
          placeholder="Enter your MobileNumber" 
          onChange={(e)=>setmobilenumber(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Age">
          <Form.Control 
          type="number" 
          placeholder="Enter your Age" 
          onChange={(e)=>setage(e.target.value)}
          required
          />
        </Form.Group>
        <button 
        onClick={(e)=>handelSubmit(e)}
        variant="success"
        type="submit"
        className="btn btn-success"
        >
         submit
        </button>
        <Link className="d-grid gap-2" to="/">
           <button variant="info" size="lg" className="btn btn-info btn-lg">
             Home 
           </button>        
        </Link>
      </Form>
    </div>
  );
}

export default Create;
