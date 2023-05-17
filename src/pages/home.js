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
    // const fetchData = (page) => {
    //     dispatch(getPosts(page));
    // };
    useDocumentTitle('Home');
    console.log(posts);
    return (
        <div className="home">
            <Featured />
            {/* <Posts
                items={posts.posts.data || []}
                total={posts.posts.total}
                limit={posts.posts.limit}
                getItems={fetchData}
                isLoading={posts.loading}
            /> */}
        </div>
    );
}
