import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';
import Posts from 'components/Posts';

import { getCategoryBlogs } from 'store/actions/postAction';
import useDocumentTitle from 'utils/useDocumentTitle';

const Category = () => {
    const { id } = useParams();
    const { blogsByCat } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryBlogs({ id }));
    }, [dispatch, id]);
    const fetchData = (page) => {
        dispatch(getCategoryBlogs({ id, page }));
    };
    useDocumentTitle(blogsByCat.category.title);
    return (
        <section className="category bg-gray-100">
            <div className="wrapper custom-container-1">
                <Breadcrumb category={{ ...blogsByCat.category }} />
                <Posts
                    items={blogsByCat.blogsByCat.docs || []}
                    limit={blogsByCat.blogsByCat.limit}
                    total={blogsByCat.blogsByCat.totalDocs}
                    getItems={fetchData}
                />
            </div>
        </section>
    );
};

export default Category;
