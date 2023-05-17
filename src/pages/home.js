import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturesBlog, getPosts } from 'store/actions/postAction';
import Featured from 'components/Featured';
import Posts from 'components/Posts';
import useDocumentTitle from 'utils/useDocumentTitle';

export default function Home() {
    const { posts } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        dispatch(getFeaturesBlog());
    }, [dispatch]);
    const fetchData = (page) => {
        dispatch(getPosts(page));
    };
    useDocumentTitle('Home');
    return (
        <div className="home">
            <Featured />
            <Posts
                items={posts.items || []}
                total={posts.total}
                limit={posts.limit}
                getItems={fetchData}
                isLoading={posts.loading}
            />
        </div>
    );
}
