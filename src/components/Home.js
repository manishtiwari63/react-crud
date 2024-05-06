import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  function setId(id, Name, Email, MobileNumber, Age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("MobileNumber", MobileNumber);
    localStorage.setItem("Age", Age);
  }

  function deleteUser(id) {
    let index = users.findIndex(function (e) {
      return e.id === id;
    });
    if (index !== -1) {
      users.splice(index, 1);
    }
    localStorage.setItem("users", JSON.stringify(users));
    history("/");
  }

  return (
    <div style={{}}>
      <Table striped border hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.MobileNumber}</td>
                <td>{item.Age}</td>
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) =>
                        setId(
                          item.id,
                          item.Name,
                          item.Email,
                          item.MobileNumber,
                          item.Age
                        )
                      }
                      variant="primary"
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    onClick={() => deleteUser(item.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" style={{ textDecoration: "none" }} to="/create">
        <button variant="success" className="btn btn-success" size="lg">Create Record</button>
      </Link>
    </div>
  );
}

export default Home;

