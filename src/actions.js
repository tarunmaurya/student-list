import * as actionTypes from "./actionTypes";

export const getStudents = () => {
  return {
    type: actionTypes.GET_STUDENTS,
  };
};

export const removeStudent = (id) => {
  return {
    type: actionTypes.REMOVE_STUDENTS,
    id,
  };
};

export const addStudents = (student) => {
  return {
    type: actionTypes.ADD_STUDENTS,
    student,
  };
};


