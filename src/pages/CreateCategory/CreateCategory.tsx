import { Formik, Form, Field, type FormikHelpers } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import { fetchCreateCategory } from "./api";

const initialValues = {
  name: "",
  image: "",
};



const CreateCategory = () => (
  <div>
    <h1>Create Category</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, actions) => {
        // same shape as initial values
        console.log(values);
        fetchCreateCategory(values, actions);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {/* If this field has been touched, and it contains an error, display
            it */}
          {touched.name && errors.name && <div>{errors.name}</div>}

          <Field name="image" />
          {/* If this field has been touched, and it contains an error, display it
           */}
          {touched.image && errors.image && <div>{errors.image}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreateCategory;
