import { combineReducers } from 'redux';

import {
    featuresReducer as features,
    postReducer as posts,
    CategoryBlogsReducer as blogsByCat,
    PopularBlogsReducer as popularPosts,
    ArchivedBlogsReducer as archivedPosts,
    ArchivedBlogsByYearReducer as archivedPostsByYear,
} from './postReducer';
import detailPost from './detailPost';
import categories from './categories';
import siteInfo from './siteInfo';
import about from './about';
import contact from './contact';

export default combineReducers({
    features,
    posts,
    detailPost,
    categories,
    siteInfo,
    blogsByCat,
    about,
    contact,
    popularPosts,
    archivedPosts,
    archivedPostsByYear,
});
