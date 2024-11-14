import { Form, Formik, Field } from "formik";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const initialValues = {
    searchBar: "",
  };

  function handleSubmit(values) {
    onSubmit(values.searchBar);
  }

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {() => (
          <Form>
            <Field
              name="searchBar"
              type="text"
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </header>
  );
}
