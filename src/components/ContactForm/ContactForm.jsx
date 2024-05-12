import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { apiAddUserContact } from '../../redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!')
    .required('User name is required!'),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (formData, formActions) => {
    dispatch(apiAddUserContact(formData));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={contactSchema}
      onSubmit={onAddContact}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.text}>Name</span>
          <Field type="text" name="name" className={css.formInput} />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.text}>Number</span>
          <Field type="tel" name="number" className={css.formInput} placeholder="0957325055"/>
          <ErrorMessage name="number" component="span" />
        </label>
        <button
          type="submit"
          title="Click to save new contact"
          aria-label="Add new contact"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
