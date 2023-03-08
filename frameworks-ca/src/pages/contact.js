import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { Formik } from "formik";


const schema = yup
.object().shape({
  fullName: yup.string().min(3).required(),
  email: yup.string().required(),
  subject: yup.string().min(3).required(),
  message: yup.string().min(3).required(),

})

function Contact() {

  return (
    <Formik
    validationSchema = {schema}
    onSubmit= {console.log}
    initialValues= {{
      fullName: '',
      email: '',
      subject: '',
      message: '',
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
          <Form.Group className="mb-3" controlId="validationFormikFullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
              type="text" 
              name="fullName"
              value={values.fullName} 
              placeholder="Enter your full name"  
              onChange={HandleChange} 
              isValid={touched.fullName && !errors.fullName}/>
              
            </Form.Group>
          <Form.Group className="mb-3" controlId="validationFormikEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="text" 
            name="email"
            value={values.email} placeholder="Enter email"  
            onChange={HandleChange} 
            isValid={touched.email && !errors.email}/>
            <p>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationFormikSubject">
            <Form.Label>Your Subject</Form.Label>
            <Form.Control 
            type="text" value={values.subject} 
            name="subject"
            placeholder="Your Subject"  
            onChange={HandleChange} 
            isValid={touched.subject && !errors.subject}/>
            <p>{errors.subject?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationFormikMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control 
            type="text" as="textarea" 
            name="message"
            rows={3} 
            value={values.message} 
            placeholder="Enter your message"  
            onChange={HandleChange} 
            isValid={touched.message && !errors.message}/>
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