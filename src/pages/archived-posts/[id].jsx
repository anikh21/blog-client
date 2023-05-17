import Posts from 'components/Posts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArchivedPostsByYear } from 'store/actions/postAction';
import useDocumentTitle from 'utils/useDocumentTitle';

const ArchivedPosts = () => {
    const { id } = useParams();
    const { archivedPostsByYear } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArchivedPostsByYear(id, 1));
    }, [dispatch, id]);
    const fetchData = (page) => {
        dispatch(getArchivedPostsByYear(id, page));
    };
    useDocumentTitle(`Archived-${id}`);
    return (
        <section className="archived_posts bg-gray-100 pt-8">
            <h1 className="text-center text-5xl font-bold">Archived Posts:</h1>
            <Posts
                items={archivedPostsByYear.items || []}
                limit={archivedPostsByYear.limit}
                total={archivedPostsByYear.total}
                getItems={fetchData}
                isLoading={archivedPostsByYear.loading}
            ></Posts>
        </section>
    );
};

export default ArchivedPosts;
