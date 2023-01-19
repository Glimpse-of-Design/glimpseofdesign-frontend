import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {Field, Form, Formik} from 'formik';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import logo from '../../assets/nav-logo.png';
import {auth} from '../../config/firebase/firebase-config';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = () => {
    const [, setUser] = useState({});
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <div>
            <h1 className="hidden">Displaying Error Messages</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values) => {
                    const login = async () => {
                        try {
                            await signInWithEmailAndPassword(
                                auth,
                                values.email,
                                values.password
                            );
                            await Swal.fire({
                                position: 'top-end',
                                title: 'Successfully logged in',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate('/dashboard/projects');
                        } catch (e) {
                            await Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Your Username or password incorrect',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate('/login');
                        }
                    }
                    login().then();
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="flex flex-col items-center justify-center">
                            <img alt="Glimpse of Design" src={logo} className="h-20 mt-8" />
                            <div
                                className="bg-gray-50 shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-12">
                                <p className="text-onSurface text-2xl font-extrabold leading-6 text-gray-800 mb-6">
                                    Login to your account
                                </p>
                                <div>
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="text-secondary text-base font-semibold leading-none text-gray-800">
                                                Username
                                            </label>
                                            <Field
                                                type="text"
                                                name="email"
                                                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-surface-700 mt-4 bg-white border rounded border-gray-200 placeholder-gray-100"
                                            />
                                            {touched.email && errors.email && (
                                                <div className="text-error">{errors.email}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="text-secondary text-base font-semibold leading-none text-gray-800">
                                                Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                className="text-gray-900 p-3 focus:oultine-none focus:border-surface-700 bg-white border-gray-200 placeholder-gray-100bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                            />
                                            {touched.password && errors.password && (
                                                <div className="text-error">{errors.password}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-full mt-8">
                                        <button
                                            type="submit"
                                            className="bg-primary hover:bg-amber-400 text-secondary text-sm font-semibold leading-none text-onSurface focus:ring-2 focus:ring-offset-2 focus:ring-title_bg-700 focus:outline-none border-none rounded py-4 w-full"
                                        >
                                            Login to Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
