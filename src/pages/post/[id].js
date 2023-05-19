import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getPost } from 'store/actions/postAction';

import 'styles/components/single_post.css';
import useDocumentTitle from 'utils/useDocumentTitle';

export default function SinglePost() {
    const { id } = useParams();
    const { detailPost } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost({ id }));
    }, [dispatch, id]);
    useDocumentTitle(detailPost.title);
    return (
        <section className="single-post">
            <div className="wrapper single custom-container-1">
                <h1 className="post-title">
                    {detailPost.title || <Skeleton />}
                </h1>
                {(detailPost.createdAt && (
                    <div className="post-meta single">
                        <div className="date">
                            {moment(detailPost.createdAt).format(
                                'MMMM Do YYYY, H:MM',
                            )}
                        </div>
                        <div className="post-cat">
                            In <Link to="/">{detailPost.category.title}</Link>
                        </div>
                    </div>
                )) || (
                    <Skeleton
                        width={'16rem'}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                        }}
                    />
                )}

                {(detailPost.thumbnail && (
                    <div className="thumbnail single">
                        <img
                            src={`${process.env.REACT_APP_ASSETS_FOLDER}${detailPost.thumbnail}`}
                            alt={detailPost.title}
                        />
                    </div>
                )) || (
                    <Skeleton
                        height={'480px'}
                        width={'960px'}
                        style={{ margin: '0 auto', display: 'block' }}
                    />
                )}
                {(detailPost.body && (
                    <div
                        className="post-desc single"
                        dangerouslySetInnerHTML={{ __html: detailPost.body }}
                    ></div>
                )) || (
                    <Skeleton
                        count={8}
                        style={{
                            width: '820px',
                            margin: '0 auto',
                            display: 'block',
                        }}
                    />
                )}
            </div>
        </section>
    );
}
