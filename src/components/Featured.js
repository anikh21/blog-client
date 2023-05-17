// import moment from 'moment';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import 'styles/components/featured.css';
export default function Featured() {
    const { featured } = useSelector((state) => state);
    return (
        <section className="featured">
            <div className="custom-container-1">
                {featured.items.length && (
                    <div className="wrapper">
                        <div
                            className="left w-2/3"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_BASE_URL}/images/blogs/${featured.items[0].thumbnail}")`,
                            }}
                        >
                            <div className="category">
                                <span>{featured.items[0].category.title}</span>
                            </div>
                            <h3 className="title">{featured.items[0].title}</h3>
                            <div className="post-meta">
                                <div className="avatar">
                                    <img
                                        src="https://preview.colorlib.com/theme/philosophy/images/avatars/user-03.jpg.webp"
                                        alt=""
                                    />
                                </div>
                                <ul>
                                    <li>{featured.items[0].author.name}</li>
                                    <li>
                                        {moment(
                                            featured.items[0].createdAt,
                                        ).format('MMMM Do YYYY')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right w-1/3">
                            {featured.items.slice(1).map((item) => (
                                <div
                                    className="card"
                                    key={item._id}
                                    style={{
                                        backgroundImage: `url("${process.env.REACT_APP_PUBLIC_DIR}/images/blogs/${item.thumbnail}")`,
                                    }}
                                >
                                    <div className="category">
                                        <span>{item.category.title}</span>
                                    </div>
                                    <h3 className="title">{item.title}</h3>
                                    <div className="post-meta">
                                        <ul>
                                            <li>{item.author.name}</li>
                                            <li>
                                                {moment(item.createdAt).format(
                                                    'MMMM Do YYYY',
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
