import { combineReducers } from 'redux';

import { PopularBlogsReducer as popularPosts } from './popularPosts';
import { postReducer as posts } from './homePosts';
import { featuredReducer as featured } from './featured';
import { archivedPosts as archived } from './archivedPosts';
import { ArchivedBlogsByYearReducer as archivedPostsByYear } from './archivedPostsByYear';
import { categoryReducer as blogsByCat } from './categoryPosts';
import detailPost from './detailPost';
import categories from './categories';
import siteInfo from './siteInfo';
import about from './about';
import contact from './contact';

export default combineReducers({
    featured,
    posts,
    detailPost,
    categories,
    siteInfo,
    blogsByCat,
    about,
    contact,
    popularPosts,
    archived,
    archivedPostsByYear,
});
