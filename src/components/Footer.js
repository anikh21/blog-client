import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/components/footer.scss';
import { getArchivedPosts } from 'store/actions/postAction';

export default function Footer() {
    const { siteInfo } = useSelector((state) => state);
    const [email, setEmail] = useState('');
    const [newsLetterLoading, setNewsLetterLoading] = useState(false);
    const { archivedPosts } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArchivedPosts());
    }, [dispatch]);

    async function sendNewsletter(e) {
        e.preventDefault();
        if (email) {
            setNewsLetterLoading(true);
            try {
                await axios.post('/newsletter', { email });
                setEmail('');
                toast.success(
                    'Thanks for subscribing us. Please check your email.',
                    { theme: 'colored' },
                );
                e.target.reset();
            } catch (error) {
                toast.error('You already subscribed, thank you.', {
                    theme: 'colored',
                });
            } finally {
                setNewsLetterLoading(false);
            }
        }
    }
    return (
        <footer>
            <div className="custom-container-1">
                <ToastContainer />
                <div className="wrapper">
                    <div className="w-3/5">
                        <div className="footer-menu-col">
                            <div className="footer-menu">
                                <h3 className="title">quick links</h3>
                                <ul>
                                    <li>
                                        <Link to="/">home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">styles</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">about</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/">privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h3 className="title">archives</h3>
                                {archivedPosts.archived_posts.length > 0 && (
                                    <ul>
                                        {archivedPosts.archived_posts.map(
                                            (item) => (
                                                <li key={item._id}>
                                                    <Link
                                                        to={`/archived-posts/${item._id}`}
                                                    >
                                                        {item._id}
                                                    </Link>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                )}
                            </div>
                            <div className="footer-menu">
                                <h3 className="title">social</h3>
                                {siteInfo.siteInfo.social && (
                                    <ul>
                                        <li>
                                            <Link
                                                to={
                                                    siteInfo.siteInfo.social
                                                        .facebook
                                                }
                                                target="_blank"
                                            >
                                                facebook
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={
                                                    siteInfo.siteInfo.social
                                                        .twitter
                                                }
                                                target="_blank"
                                            >
                                                twitter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={
                                                    siteInfo.siteInfo.social
                                                        .instagram
                                                }
                                                target="_blank"
                                            >
                                                instagram
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={
                                                    siteInfo.siteInfo.social
                                                        .linkedin
                                                }
                                                target="_blank"
                                            >
                                                linkedin
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="newsletter">
                            <h3 className="title">newsletter</h3>
                            <p>
                                Sit vel delectus amet officiis repudiandae est
                                voluptatem. Tempora maxime provident nisi et
                                fuga et enim exercitationem ipsam. Culpa
                                consequatur occaecati.
                            </p>
                            <form onSubmit={sendNewsletter}>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={newsLetterLoading}
                                    style={{
                                        opacity: newsLetterLoading ? 0.5 : 1,
                                    }}
                                >
                                    send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
