import React from "react";
import * as yup from 'yup';
import styles from "../styleModules/contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";


const schema = yup.object().shape({
  fullName: yup.string().min(3).required("Enter your full name"),
  email: yup.string().required("Valid email is required"),
  subject: yup.string().min(3).required("Enter your subject"),
  message: yup.string().min(3).required( "Write your message here"),

})

function Contact() {
  const initialValues = { fullName: "", email: "", subject: "", message: ""};

  return (
    <Formik
    validationSchema = {schema}
    onSubmit= {console.log}
    initialValues=  { initialValues }
    >
      {(formik) => {
        const {
      handleSubmit,
      HandleChange,
      values,
      touched,
      errors,
      } = formik
      return (

    
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.contactHeader}>Contact Us</h1>
        <p className={styles.headerP}>Fill in the form to contact us</p>
      </div>
      <div className={styles.contacForm}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrap}>
              <label>Full Name</label>
              <Field className={styles.input}
                type="text" 
                name="fullName"
                value={values.fullName} 
                placeholder="Enter your full name"  
                onChange={HandleChange} 
                />
                <ErrorMessage name="fullName" component="span" className="error" />
            </div>
              
            <div>
              <label>Email</label>
              <Field className={styles.input}
                type="email" 
                name="email"
                value={values.fullName} 
                placeholder="Enter your Email"  
                onChange={HandleChange} 
                />
                <ErrorMessage name="email" component="span" className="error" />
            </div>
            <div>
              <label>Your subject</label>
              <Field className={styles.input}
                type="text" 
                name="subject"
                value={values.subject} 
                placeholder="Enter your full name"  
                onChange={HandleChange} 
                />
                <ErrorMessage name="subject" component="span" className="error" />
            </div>
            <div>
              <label>Message</label>
              <Field className={styles.message}
                type="text" 
                name="message"
                value={values.message} 
                placeholder="Enter your full name"  
                onChange={HandleChange} 
                />
                <ErrorMessage name="message" component="span" className="error" />
            </div>
          
          
          <button type="submit" className={styles.formBtn}>Submit</button>
        </Form>
      </div>
    </div>
      );
      }}
    </Formik>
  );
};
  

export default Contact;