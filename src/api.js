import axios from "axios";

const BASE_URL = "https://tiicot-student-backend.herokuapp.com/api";

const api = axios.create({
  baseURL: BASE_URL
});

export const getStudents = query => {
  let url = "/students";
  if (Object.keys(query).length == 1) {
    url += `?${Object.keys(query)[0]}=${query[Object.keys(query)[0]]}`;
  }
  return api.get(url);
};

export const getStudentById = id => {
  return api.get(`/students/${id}`);
};

export const createStudent = student => {
  return api.post("/students", student);
};

export const updateStudent = (id, student) => {
  return api.put(`/students/${id}`, student);
};

export const deleteStudent = id => {
  return api.delete(`/students/${id}`);
};
