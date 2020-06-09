import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formLoginDefaultValue, formLoginValidationSchema } from "./config";

const FormModel = () => {
  const onFormSubmit = (values) => console.log(values);
  const onSetClassValidOrInValid = (e, t) =>
    e && t ? "form-control is-invalid" : "form-control is-valid";
  return (
    <div className="container">
      <Formik
        initialValues={formLoginDefaultValue}
        validationSchema={formLoginValidationSchema}
        onSubmit={onFormSubmit}
      >
        {({ errors, touched }) => (
          <Form method="post">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                autoComplete={"off"}
                id="email"
                name="email"
                className={onSetClassValidOrInValid(
                  errors.email,
                  touched.email
                )}
              />
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                autoComplete={"off"}
                id="password"
                name="password"
                className={onSetClassValidOrInValid(
                  errors.password,
                  touched.password
                )}
              />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormModel;
