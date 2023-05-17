import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import 'styles/components/featured.css';
export default function Featured() {
    const { features } = useSelector((state) => state);
    return (
        <section className="featured">
            <div className="custom-container-1">
                {features.features.length && (
                    <div className="wrapper">
                        <div
                            className="left w-2/3"
                            style={{
                                backgroundImage: `url("/images/blogs/${features.features[0].thumbnail}")`,
                            }}
                        >
                            <div className="category">
                                <span>
                                    {features.features[0].category.title}
                                </span>
                            </div>
                            <h3 className="title">
                                {features.features[0].title}
                            </h3>
                            <div className="post-meta">
                                <div className="avatar">
                                    <img
                                        src="https://preview.colorlib.com/theme/philosophy/images/avatars/user-03.jpg.webp"
                                        alt=""
                                    />
                                </div>
                                <ul>
                                    <li>{features.features[0].author.name}</li>
                                    <li>
                                        {moment(
                                            features.features[0].createdAt,
                                        ).format('MMMM Do YYYY')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right w-1/3">
                            {features.features.slice(1).map((item) => (
                                <div
                                    className="card"
                                    key={item._id}
                                    style={{
                                        backgroundImage: `url("/images/blogs/${item.thumbnail}")`,
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

                            {/* <div className="card">
                                <div className="category">
                                    <span>lifestyle</span>
                                </div>
                                <h3 className="title">
                                    Throwback To The Good Old Days.
                                </h3>
                                <div className="post-meta">
                                    <ul>
                                        <li>John Doe</li>
                                        <li>March 4, 2023</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
