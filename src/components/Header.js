import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import 'styles/components/header.scss';
import 'styles/components/search.scss';

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { categories } = useSelector((state) => state);
    const { siteInfo } = useSelector((state) => state);
    const [query, setQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    const isCategoryActive = () => {
        const categoryRoutes = categories.categories.map(
            (element) => `/category/${element._id}`,
        );
        return categoryRoutes.includes(location.pathname);
    };
    function openSearch() {
        setIsSearchOpen(true);
    }
    function closeSearch() {
        setIsSearchOpen(false);
    }
    async function searchHandler(e) {
        e.preventDefault();
        if (query) {
            navigate('/search?query=' + query);
            e.target.reset();
            closeSearch();
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        return undefined;
    }, [pathname]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27 && isSearchOpen) {
                closeSearch();
            }
        };
        const searchOpen = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                if (!isSearchOpen) {
                    openSearch();
                }
            }
        };
        window.addEventListener('keydown', handleEsc);
        window.addEventListener('keydown', searchOpen);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('keydown', searchOpen);
        };
    }, [isSearchOpen]);

    return (
        <header>
            {/* {siteInfo.siteInfo.social && (
                <div className="header-meta custom-container-1 flex justify-between relative">
                    <section
                        className={`search-area ${
                            isSearchOpen ? 'active' : ''
                        }`}
                    >
                        <div className="">
                            <h1 className="" onClick={closeSearch}>
                                &times;
                            </h1>
                            <form
                                className="flex flex-col mt-24"
                                onSubmit={searchHandler}
                            >
                                <label
                                    htmlFor="search"
                                    className="text-white font-bold"
                                >
                                    Search for:
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Type Keywords"
                                />
                            </form>
                        </div>
                    </section>
                    <div className="social">
                        <ul className="flex">
                            <li>
                                <Link
                                    to={siteInfo.siteInfo.social.facebook}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={siteInfo.siteInfo.social.facebook}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-twitter"
                                    >
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={siteInfo.siteInfo.social.facebook}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-instagram"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="20"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line
                                            x1="17.5"
                                            y1="6.5"
                                            x2="17.51"
                                            y2="6.5"
                                        ></line>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={siteInfo.siteInfo.social.linkedin}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="brand">
                        <Link to="/">
                            <img src="/images/logo/logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="search" onClick={openSearch}>
                        <span>search</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            )} */}

            <div className="main-menu">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            home
                        </NavLink>
                    </li>
                    <li className="has-inner-items">
                        <NavLink
                            to=""
                            className={({ isActive }) =>
                                !isActive && isCategoryActive() ? 'active' : ''
                            }
                        >
                            categories
                        </NavLink>
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        {/* {categories.categories.length > 0 && (
                            <ul>
                                {categories.categories.map((element) => (
                                    <li key={element._id}>
                                        <NavLink
                                            to={`/category/` + element._id}
                                            className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            }
                                        >
                                            {element.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )} */}
                    </li>
                    <li className="has-inner-items">
                        <Link to="#">blog</Link>
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">video post</Link>
                            </li>
                            <li>
                                <Link to="#">audio post</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">styles</Link>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            to="/about"
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            to="/contact"
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
