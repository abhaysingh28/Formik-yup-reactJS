import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Typography } from "@mui/material";


const App = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("please enter your name"),
    email: Yup.string().email("Invalid email format").required("Invalid email format  "),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Passwords must match"),
  });
  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>form validation</h1>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field type="text" name="name" placeholder="enter your name" />
          <Typography
          sx={{
            color: "red",
          }}>
            <ErrorMessage name="name" />
          </Typography >
          <Field type="email" name="email" placeholder="enter your email" />
          <Typography
          sx={{
            color: "red",
          }}>
            <ErrorMessage name="email" />
          </Typography>
          <Field
            type="password"
            name="password"
            placeholder="enter your password"
          />
           <Typography
           sx={{
            color: "red",
          }}>
            <ErrorMessage name="password" />
          </Typography>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
          />
          <Typography
          sx={{
            color: "red",
          }}>
            <ErrorMessage name="confirmPassword" />
          </Typography>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default App;
