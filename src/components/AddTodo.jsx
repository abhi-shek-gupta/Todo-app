import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import FormContainer from "./FormConatiner";

const AddTodo = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);
  const [age, setAge] = useState(18);
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState(false);
  const [action, setAction] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitData = {
      name,
      gender,
      hobby,
      age,
      date,
      taskName,
      status,
      action,
    };
    console.log(submitData);
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="gender" className="my-3">
            <Form.Label>Gender</Form.Label>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              id="gender-male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              id="gender-female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="hobby" className="my-3">
            <Form.Label>Hobby</Form.Label>
            <Form.Check
              inline
              label="Sports"
              name="sports"
              id="hobby"
              value="sports"
              checked={hobby.includes("sports")}
              onChange={(e) =>
                setHobby((prevHobby) => [...prevHobby, e.target.value])
              }
            />
            <Form.Check
              inline
              label="Reading"
              name="reading"
              id="hobby-reading"
              value="reading"
              checked={hobby.includes("reading")}
              onChange={(e) =>
                setHobby((prevHobby) => [...prevHobby, e.target.value])
              }
            />

            <Form.Check
              inline
              label="Music"
              name="music"
              id="hobby-music"
              value="music"
              checked={hobby.includes("music")}
              onChange={(e) =>
                setHobby((prevHobby) => [...prevHobby, e.target.value])
              }
            />
          </Form.Group>
          <Form.Group controlId="age" className="my-3">
            <Form.Label>Age</Form.Label>
            <Form.Range
              id="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              min={18}
              max={55}
              step={1}
            />
            {age}
          </Form.Group>

          <Form.Group controlId="date" className="my-3">
            <Form.Label>Date</Form.Label>
            <DatePicker onChange={setDate} value={date} />
          </Form.Group>

          <Form.Group controlId="taskName" className="my-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="status" className="my-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="status">Status</Form.Label>
              <Form.Select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option vlaue="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>

          <Form.Group controlId="action" className="my-3">
            <Form.Label>Action</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default AddTodo;
