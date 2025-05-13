import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../redux/auth/operations';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        email: '',
        password: ''
    };
    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values));
    };
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                    Join now to securely manage your personal contacts. It's quick and easy!
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <Field name='name' type="name" className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <Field name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <Field name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button  type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p className="text-center text-sm text-base-content">
                                Already have an account? <Link to="/login" className="link link-primary">Log in here</Link>
                            </p>
                        </Form>
                    </Formik>
                    <div className='divider divider-ghost'></div>
                    <Link className='text-mg text-center'to='/'>
                        Back to Home
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterForm;
