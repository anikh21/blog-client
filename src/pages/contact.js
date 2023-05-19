import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { getContact } from 'store/actions/contact';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'styles/components/contact.scss';
import useDocumentTitle from 'utils/useDocumentTitle';

export default function Contact() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [isHuman, setIsHuman] = useState(false);
    useDocumentTitle('Contact');
    async function submitMessage(e) {
        e.preventDefault();
        if (name && email && message && isHuman) {
            try {
                await axios.post('/api/v1/dashboard/contact/messages', {
                    name,
                    email,
                    url,
                    message,
                });
                toast.success('Your message successfully send.', {
                    theme: 'colored',
                });
                setIsHuman(false);
                e.target.reset();
            } catch (error) {
                toast.error(error.message, {
                    theme: 'colored',
                });
            }
        } else if (name && email && message && !isHuman) {
            toast.warn('Please verify you are not a robot.', {
                theme: 'colored',
            });
        } else {
            toast.warn('Please fill the form.', { theme: 'colored' });
        }
    }
    const { siteInfo } = useSelector((state) => state);
    const { contact } = useSelector((state) => state);
    const handleRecaptchaChange = (value) => {
        if (value) {
            setIsHuman(true);
        }
    };

    return (
        <section className="contact">
            <ToastContainer />
            <div className="custom-container-1">
                {contact.contact.pageTitle && (
                    <div className="wrapper">
                        <h2 className="title">{contact.contact.pageTitle}</h2>

                        <div className="map">
                            <iframe
                                title="map"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDkCIWjlW4STwE-Zo1qVpGcUQZBJxHEfj0&center=${siteInfo.siteInfo.latitude},${siteInfo.siteInfo.longitude}&q=Splash-nDash Aqua Park`}
                                frameBorder={0}
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full lg:w-3/4 h-64 md:h-96 mx-auto mt-10 mb-20"
                            ></iframe>
                        </div>

                        <div className="desc">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: contact.contact.text,
                                }}
                            ></div>
                            <div className="address grid md:grid-cols-2 gap-4">
                                <div className="find-us">
                                    <h3 className="title">Where to Find Us</h3>
                                    <ul>
                                        {contact.contact.findUs.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                                <div className="contact-info">
                                    <h3 className="title">Contact Info</h3>
                                    <ul>
                                        {contact.contact.contactInfo.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="contact-from">
                                <h3 className="title">Say Hello</h3>
                                <form onSubmit={submitMessage}>
                                    <div className="input">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                        />
                                        <span className={`error-msg`}>
                                            Please enter your name.
                                        </span>
                                    </div>
                                    <div className="input">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />
                                        <span className="error-msg">
                                            Please enter your email.
                                        </span>
                                    </div>
                                    <div className="input">
                                        <input
                                            type="url"
                                            name="url"
                                            onChange={(e) =>
                                                setUrl(e.target.value)
                                            }
                                            placeholder="Enter your website url"
                                        />
                                    </div>
                                    <div className="input">
                                        {' '}
                                        <textarea
                                            name="message"
                                            id=""
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                        <span className="error-msg">
                                            Please enter your message.
                                        </span>
                                    </div>
                                    <ReCAPTCHA
                                        sitekey="6LdhVv0lAAAAAEw3JrDrAGEZ8gdOXGlkWLT73wsW"
                                        onChange={handleRecaptchaChange}
                                    />
                                    <button type="submit">SEND</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
