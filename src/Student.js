import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { removeStudent, addStudents, getStudents } from "./actions";

const Student = ({ students, getStudents, removeStudent, addStudents }) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputFields, setInputFields] = useState({name: '', email: '', percentage: ''});

  useEffect(() => {
    getStudents();
  }, []);
  
  const openInput = () => {
    setIsInputOpen(true);
  }
  const handleAddStudent = (e) => {
    e.preventDefault();
    addStudents(inputFields);
  };

  const deleteStudent = (e) => {
    const studenetId = e.target.id;
    removeStudent(studenetId);
  };
  
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
    
  console.log("students", students);
  return (
    <div className="container">
      <h2>Students List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Percentage</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.name} style={{color: student.marks > 75 ? 'red' : ''}}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.percentage}</td>
                <td>
                  <button
                    id={student.name}
                    onClick={deleteStudent}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={openInput} className="btn btn-info">
        Add Student
      </button>
      {isInputOpen && (
        <form className="form-horizontal" onChange={onInputChange}>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="name">
              Name:
            </label>
            <div className="col-sm-4">
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">
              Email:
            </label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="percentage">
              Percentage:
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                className="form-control"
                id="percenatge"
                placeholder="Enter percenatage"
                name="percentage"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={handleAddStudent} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.studentReducer.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchStudents: (student) => dispatch(fetchStudents(student)),
    removeStudent: (id) => dispatch(removeStudent(id)),
    addStudents: (student) => dispatch(addStudents(student)),
    getStudents: () => dispatch(getStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
