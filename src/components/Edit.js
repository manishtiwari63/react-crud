import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import users from "./users";

function Edit() {
  let history = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [age, setage] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    setname(localStorage.getItem("Name"));
    setemail(localStorage.getItem("Email"));
    setmobilenumber(localStorage.getItem("MobileNumber"));
    setage(localStorage.getItem("Age"));
    setid(localStorage.getItem("id"));
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || age === "") {
      alert("Invalid input");
      return;
    }

    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const updatedUser = {
        ...users[index],
        Name: name,
        Email: email,
        MobileNumber: mobilenumber,
        Age: age
      };

      // Update the users array
      users[index] = updatedUser;
      // Update localStorage if needed
      localStorage.setItem("users", JSON.stringify(users));
    }

    history("/");
  };

  return (
    <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Control
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="MobileNumber">
        <Form.Control
          type="number"
          placeholder="Enter your MobileNumber"
          onChange={(e) => setmobilenumber(e.target.value)}
          value={mobilenumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Age">
        <Form.Control
          type="number"
          placeholder="Enter your Age"
          onChange={(e) => setage(e.target.value)}
          value={age}
        />
      </Form.Group>
      <button
        onClick={(e) => handelSubmit(e)}
        className="btn btn-success"
        type="submit"
      >
        Submit
      </button>
      <Link className="d-grid gap-2" to="/">
        <button className="btn btn-info btn-lg">Home</button>
      </Link>
    </Form>
  );
}

export default Edit;
