import React from 'react';
import { Field, Formik } from 'formik';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import * as Yup from 'yup';

function App() {


  return (
    <div className='min-vh-100 d-flex flex-column'>
      <main className='py-4 d-flex flex-grow-1'>
        <Container className='d-flex flex-grow-1'>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              password: Yup.string()
                .min(8, 'Password must be at least 8 charaters')
                .required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              alert('Login was Successful')
              console.log(values)
              setSubmitting(false)
              console.log(resetForm())
            }}
            onReset={({ resetForm }) => {
              resetForm()
            }}
          >
            {({
              handleSubmit,
              handleReset,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <div className='w-form m-auto'>
                <h1 className='mb-4'>
                  Formik <span className='text-danger'>Form</span>
                </h1>
                <Form
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                  className='px-3 py-4 shadow-lg rounded'
                  noValidate
                >
                  <Form.Group className='mb-4' controlId='email'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      as={Field}
                      type='email'
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email || ''}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-4' controlId='password'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      as={Field}
                      type='password'
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password || ''}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row xs={1} sm={2} className='g-2 mt-0'>
                    <Col>
                      <Button
                        className='w-100'
                        variant='dark'
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className='w-100'
                        variant='danger'
                        type='reset'
                        disabled={isSubmitting}
                      >
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}
          </Formik>
        </Container>
      </main>
      <footer className='py-3 bg-dark'>
        <Container>
          <p className='m-0 text-light text-center'>Made by Sean Barr</p>
        </Container>
      </footer>
    </div>
  )
}

export default App;