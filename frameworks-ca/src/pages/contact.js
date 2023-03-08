import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const { Formik } = Formik;

  const schema = yup
  .object().shape({
    fullName: yup.string.min(5).max(25).required(),
    email: yup.string.min(10).max(30).required(),
    subject: yup.string.min(5).max(50).required(),
    message: yup.string.min(20).max(200).required(),

  })
  
  

  return (
    <Formik
    validationSchema = {schema}
    onSubmit= {console.log}
    initialValues= {{
      fullName,
      email,
      subject,
      message,
    }}
    >
      {(
      handleSubmit,
      HandleChange,
      values,
      touched,
      isValid,
      errors,
      ) => (

    
    <div>
      <h1>Contact Us </h1>
      <div className="contact--form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" value={values.fullName} placeholder="Enter your full name"  onChange={HandleChange} isValid={touched.fullname && !errors.fullname}/>
              
            </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" value={email} placeholder="Enter email"  onChange={HandleChange} isValid={touched.email && !errors.email}/>
            <p>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Your Subject</Form.Label>
            <Form.Control type="text" value={subject} placeholder="Your Subject"  onChange={HandleChange} isValid={touched.subject && !errors.subject}/>
            <p>{errors.subject?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control type="text" as="textarea" rows={3} value={message} placeholder="Enter your message"  onChange={HandleChange} isValid={touched.message && !errors.message}/>
            <p>{errors.message?.message}</p>
          </Form.Group>
          
          <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </div>
    </div>
      )}
    </Formik>
  );
}
  

export default Contact;