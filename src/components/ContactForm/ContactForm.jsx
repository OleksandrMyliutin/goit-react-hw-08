import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContactThunk } from '../../redux/contacts/operations';


const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\+?\d+$/, 'Must be digits or start with +')
    .min(6, 'Too short')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
  
    console.log('Submitting new contact:', newContact);
  
    dispatch(addContactThunk(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className="bg-base-200 border border-base-300 rounded-box p-6 w-full max-w-md mx-auto shadow-lg">
        <div className="form-control mb-4">
          <label htmlFor={nameFieldId}className="label"><span className="label-text">Name</span></label>
          <Field className="input input-bordered w-full" type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className="text-error text-sm mt-1" />
        </div>

        <div className="form-control mb-4">
          <label htmlFor={numberFieldId} className="label"><span className="label-text">Number</span></label>
          <Field className="input input-bordered w-full" type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" className="text-error text-sm mt-1" />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
