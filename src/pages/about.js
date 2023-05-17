import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'styles/components/about.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getAbout } from 'store/actions/about';
import useDocumentTitle from 'utils/useDocumentTitle';

export default function About() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);
    const { about } = useSelector((state) => state);
    useDocumentTitle('About');
    return (
        <section className="about">
            <div className="custom-container-1">
                {about.about && (
                    <div className="wrapper">
                        <h1 className="title">
                            {about.about.pageTitle || <Skeleton />}
                        </h1>
                        <div className="banner">
                            {(about.about.thumbnail && (
                                <img
                                    src={`${process.env.REACT_APP_PUBLIC_DIR}/images/about/${about.about.thumbnail}`}
                                    alt=""
                                />
                            )) || <Skeleton height={'30rem'} />}
                        </div>
                        <div className="desc">
                            <div
                                className="text"
                                dangerouslySetInnerHTML={{
                                    __html: about.about.text,
                                }}
                            ></div>
                            <div className="mission-vision">
                                <div className="item">
                                    <h3 className="title">Who We Are.</h3>
                                    <p>
                                        {about.about.whoWeAre || (
                                            <Skeleton count={10} />
                                        )}
                                    </p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Our Mission.</h3>
                                    <p>
                                        {about.about.mission || (
                                            <Skeleton count={10} />
                                        )}
                                    </p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Our Vision.</h3>
                                    <p>
                                        {about.about.vision || (
                                            <Skeleton count={10} />
                                        )}
                                    </p>
                                </div>
                                <div className="item">
                                    <h3 className="title">Our Values.</h3>
                                    <p>
                                        {about.about.values || (
                                            <Skeleton count={10} />
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
