import { Link } from 'react-router-dom';
import moment from 'moment';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useLocation } from 'react-router-dom';

import 'styles/components/home_posts.scss';
import 'styles/components/paginate.scss';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Posts = ({ items, total, limit, getItems, isLoading }) => {
    const pageCount = (limit && Math.ceil(total / limit)) || 0;
    const handlePageClick = (event) => {
        getItems(event.selected + 1);
    };

    const { pathname } = useLocation();
    return (
        <section className={`home-posts py-20`}>
            <div className="custom-container-1 pb-12">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="2rem">
                        {(!isLoading &&
                            items.map((item) => (
                                <div className="post-card" key={item._id}>
                                    <div className="post-thumbnail">
                                        {item.thumbnail && (
                                            <Link to={'/post/' + item._id}>
                                                <img
                                                    src={`${process.env.REACT_APP_PUBLIC_DIR}/images/blogs/${item.thumbnail}`}
                                                    alt=""
                                                />
                                            </Link>
                                        )}
                                    </div>
                                    <div className="post-details">
                                        <div className="post-meta">
                                            {moment(item.createdAt).format(
                                                'MMMM Do YYYY, HH:MM',
                                            )}
                                        </div>
                                        <div className="post-title">
                                            <Link to={'/post/' + item._id}>
                                                {item.title}
                                            </Link>
                                        </div>
                                        <div className="post-desc">
                                            {item.body
                                                .replace(/<[^>]+>/g, '')
                                                .substring(0, 150) + '...'}
                                        </div>
                                        <div className="post-cat">
                                            <Link
                                                to={
                                                    `/category/` +
                                                    item.category._id
                                                }
                                            >
                                                {item.category.title}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))) ||
                            [
                                {
                                    id: Math.floor(
                                        Math.random() * (50 - 1 + 1) + 1,
                                    ),
                                },
                                {
                                    id: Math.floor(
                                        Math.random() * (100 - 51 + 1) + 51,
                                    ),
                                },
                                {
                                    id: Math.floor(
                                        Math.random() * (150 - 101 + 1) + 101,
                                    ),
                                },
                            ].map((item) => (
                                <div
                                    className="post-card"
                                    key={pathname + item.id}
                                >
                                    <div className="post-details">
                                        <Skeleton width={'6rem'} />
                                        <div className="post-title">
                                            <Skeleton />
                                        </div>
                                        <Skeleton count={5} />
                                        <Skeleton width={'6rem'} />
                                    </div>
                                </div>
                            ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={limit}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </section>
    );
};
export default Posts;
