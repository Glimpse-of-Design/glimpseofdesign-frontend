import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [pressedEmail, setPressedEmail] = useState(false);
    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o5gc3lh', 'template_jk9ypea', form.current, '2ZGngDdyigPc-3rlJ')
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    title: 'Email Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                }).then();
                navigate("/");
                console.log(result.text);
            }, (error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Email Send Error',
                    showConfirmButton: false,
                    timer: 1500,
                }).then();
                console.log(error.text);
            });
    };

    return (
        <div>
            {!pressedEmail && (
                <div className="flex justify-center items-center flex-col text-onSurface sm:mt-0">
                    <section>
                        <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase mt-10">
                            Contact us
                        </h1>
                        <p className="text-gray-600 text-base text-center mt-4">
                            Need to get in touch with us?
                        </p>
                    </section>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-10 text-onSurface">
                        <div className="h-max p-8 flex flex-col justify-center items-center">
                            <div
                                className="bg-primary bg-opacity-80 h-20 w-20 mb-6 rounded-full flex justify-center items-center">
                                <FaPhoneAlt className="text-2xl text-surface" />
                            </div>
                            <p className="font-semibold text-xl text-primary">Phone:</p>
                            <p>+94 71 7662323</p>
                        </div>
                        <div className="h-max p-8 flex flex-col justify-center m-auto items-center"
                             onClick={() => setPressedEmail(!pressedEmail)}>
                            <div
                                className="bg-primary bg-opacity-80 h-20 w-20 mb-6 rounded-full flex justify-center items-center">
                                <MdEmail className="text-2xl text-surface" />
                            </div>
                            <p className="font-semibold text-xl text-primary">Email:</p>
                            <p>glimpseofdesign@gmail.com</p>
                        </div>
                    </div>
                </div>
            )}

            {pressedEmail && (
                <section className="text-gray-700 body-font relative w-[80%] my-0 mx-auto">
                    <div className="container px-5 mx-auto">
                        <div className="lg:w-1/2 mx-auto">
                            <section className="my-8">
                                <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase mt-10">
                                    Contact us
                                </h1>
                                <p className="text-gray-600 text-base text-center mt-4">
                                    Need to get in touch with us?
                                </p>
                            </section>
                            <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="user_name" className="leading-7 text-sm text-gray-600">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            className="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="user_email"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            className="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="w-full rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button
                                        type="submit"
                                        className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-orange-300 rounded text-lg">
                                        Contact Us
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
export default ContactUs;
