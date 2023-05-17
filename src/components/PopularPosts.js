import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'styles/components/popular_posts.scss';

const PopularPosts = ({ popularPosts }) => {
    const { siteInfo } = useSelector((state) => state);
    return (
        <section className="popular-posts">
            <div className="custom-container-1">
                <div className="wrapper lg:flex">
                    <div className="lg:w-3/5">
                        <h3 className="title">Popular Posts</h3>
                        <div className="posts">
                            {popularPosts.map((post) => (
                                <div className="card" key={post._id}>
                                    <div className="thumb">
                                        {(post.thumbnail && (
                                            <Link to={`/post/${post._id}`}>
                                                <img
                                                    src={`${process.env.REACT_APP_PUBLIC_DIR}/images/blogs/${post.thumbnail}`}
                                                    alt=""
                                                    className="object-cover"
                                                />
                                            </Link>
                                        )) || (
                                            <Skeleton
                                                height={'5rem'}
                                                width={'5rem'}
                                            />
                                        )}
                                    </div>
                                    <div className="desc">
                                        {(post.title && (
                                            <Link to={`/post/${post._id}`}>
                                                <h3 className="title">
                                                    {post.title}
                                                </h3>
                                            </Link>
                                        )) || (
                                            <Skeleton
                                                width={'8rem'}
                                                height={'1.5rem'}
                                            />
                                        )}

                                        {(post.author.name && (
                                            <div className="meta">
                                                By
                                                <Link
                                                    to={`/author/${post._id}`}
                                                >
                                                    {' '}
                                                    {post.author.name}{' '}
                                                </Link>
                                                on{' '}
                                                {moment(post.createdAt).format(
                                                    'MMMM DD, YYYY',
                                                )}
                                            </div>
                                        )) || <Skeleton width={'8rem'} />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/5 lg:ml-16">
                        <h3 className="title">About Philosophy</h3>
                        <p>
                            {siteInfo.siteInfo.compDesc || (
                                <Skeleton count={8} />
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularPosts;
