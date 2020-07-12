import * as actionTypes from "./actionTypes";
const initialStudents = [
  { name: "Adam", email: "adam@gmail.com", percentage: 80 },
  { name: "Sam", email: "sam@gmail.com", percentage: 70 },
  { name: "Peter", email: "peter@gmail.com", percentage: 60 },
  { name: "John", email: "john@gmail.com", percentage: 80 },
  { name: "Steve", email: "steve@gmail.com", percentage: 40 },
  { name: "Max", email: "max@gmail.com", percentage: 90 },
];

export const studentReducer = (
         state = { students: initialStudents },
         action
       ) => {
         debugger;

         switch (action.type) {
           case actionTypes.GET_STUDENTS:
             return {
               ...state,
               students: state.students,
             };

           case actionTypes.REMOVE_STUDENTS:
             return {
               ...state,
               students: state.students.filter((student) => {
                 return student.name !== action.id;
               }),
             };

           case actionTypes.ADD_STUDENTS:
             return {
               ...state,
               students: [...state.students, action.student],
             };

           default:
             return state;
         }
       };
