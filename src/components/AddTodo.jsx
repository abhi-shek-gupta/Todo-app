import React, { useState } from "react";
import { Form, Row, Button, Card, Col } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/TodoSlice";
import FormContainer from "./FormContainer";

const AddTodo = () => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState({
    name: "",
    gender: "male",
    hobby: [],
    age: 18,
    date: new Date(),
    taskName: "",
    status: "active",
    action: "",
  });

  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    let hobby = [];
    if (target.name === "hobby") hobby = [...value.hobby, target.value];
    setValue({
      ...value,
      [target.name]: target.value,
      hobby,
      id: Date.now(),
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    dispatch(addTodo(value));
  };
  return (
    <FormContainer>
      <Card bg="light" border="secondary">
        <Card.Title className="text-center font-weight-bold py-3">
          Add To Do
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={value?.name}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="gender" className="mb-3">
                <Col>
                  <Form.Label>Gender</Form.Label>
                </Col>
                <Col>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    id="gender-male"
                    value="male"
                    checked={value?.gender === "male"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    id="gender-female"
                    value="female"
                    checked={value?.gender === "female"}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="hobby" className="mb-3">
                <Col>
                  <Form.Label>Hobby</Form.Label>
                </Col>
                <Col>
                  <Form.Check
                    inline
                    label="Sports"
                    name="hobby"
                    id="hobby"
                    value="sports"
                    checked={value?.hobby?.includes("sports")}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    inline
                    label="Reading"
                    name="hobby"
                    id="hobby-reading"
                    value="reading"
                    checked={value?.hobby?.includes("reading")}
                    onChange={(e) => handleChange(e)}
                  />

                  <Form.Check
                    inline
                    label="Music"
                    name="hobby"
                    id="hobby-music"
                    value="music"
                    checked={value?.hobby?.includes("music")}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="age" className="mb-3">
                <Form.Label>Age</Form.Label>
                <Row>
                  <Col sm={11}>
                    <Form.Range
                      className="custom-range"
                      id="age"
                      name="age"
                      onChange={(e) => handleChange(e)}
                      value={value?.age}
                      min={18}
                      max={55}
                      step={1}
                    />
                  </Col>
                  <Col sm={1}>{value?.age}</Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="date" className="mb-3">
                <Row>
                  <Col md={2}>
                    <Form.Label>Date</Form.Label>
                  </Col>
                  <Col md={10}>
                    <DatePicker
                      onChange={(value) =>
                        handleChange({ target: { name: "date", value } })
                      }
                      value={value?.date}
                      name="date"
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="taskName" className="mb-3">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  name="taskName"
                  type="text"
                  placeholder="Enter your Task name"
                  value={value?.taskName}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="status" className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="status">Status</Form.Label>
                  <Form.Select
                    name="status"
                    id="status"
                    value={value?.status}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Form.Group>

              <Form.Group controlId="action" className="mb-3">
                <Form.Label>Action</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="action"
                  placeholder="Action"
                  value={value?.action}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <div>
                <Button variant="dark" type="submit" style={{ width: "100%" }}>
                  Add
                </Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </FormContainer>
  );
};

export default AddTodo;
