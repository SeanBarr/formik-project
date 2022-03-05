import React from "react";
import { useFormik, Field, Formik, Form, ErrorMessage } from "formik";
import Container from 'react-bootstrap/Container';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>
      <main>
      <Container>
        <Formik>
          <Form onSubmit={handleSubmit} >
        <label htmlFor="emailField">Email:</label>
            <Field 
            id="emailField"
            type="email"
            name="email"
            onChange={handleChange}
            value={formik.values.email}
            />
        {errors.email && touched.email ? (
          <p>
            {errors.email}
          </p>
        ) : null}
        <ErrorMessage name="email" />
        <label htmlFor="pswField">Password:</label>
          <Field
          id="pswField"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {errors.password && touched.password ? (
          <p>
            {errors.password}
          </p>
        ) : null}
        <ErrorMessage name="password" />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </Form>
        </Formik>
          </Container>
        </main>
          <footer>
          </footer>
    </div>
  );
}

export default App;