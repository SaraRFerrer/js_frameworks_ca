import React from "react";
import * as yup from "yup";
import styles from "../styleModules/contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  fullName: yup.string().min(3).required("Enter your full name"),
  email: yup.string().required("Valid email is required"),
  subject: yup.string().min(3).required("Enter your subject"),
  message: yup.string().min(3).required("Write your message here"),
});

function Contact() {
  const alert = () => {
    toast.success("Your message has been sent !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const initialValues = { fullName: "", email: "", subject: "", message: "" };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={initialValues}
    >
      {(formik) => {
        const { handleSubmit, values } = formik;
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
                  <Field
                    className={styles.input}
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    defaultValue={values.fullName}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="span"
                    className="error"
                  />
                </div>

                <div>
                  <label>Email</label>
                  <Field
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    defaultValue={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>
                <div>
                  <label>Your subject</label>
                  <Field
                    className={styles.input}
                    type="text"
                    name="subject"
                    placeholder="Enter your full name"
                    defaultValue={values.subject}
                  />
                  <ErrorMessage
                    name="subject"
                    component="span"
                    className="error"
                  />
                </div>
                <div>
                  <label>Message</label>
                  <Field
                    className={styles.message}
                    type="text"
                    name="message"
                    placeholder="Enter your full name"
                    defaultValue={values.message}
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.formBtn}
                  onClick={() => {
                    alert();
                  }}
                >
                  Submit
                </button>
                <ToastContainer position="top-right" autoClose={5000} />
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Contact;
