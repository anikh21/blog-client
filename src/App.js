import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PageRender from './customRouter/pageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Home from './pages/home';

// Components
import Header from './components/Header';
import Footer from 'components/Footer';
import PopularPosts from 'components/PopularPosts';
import ScrollToTop from 'components/ScrollToTop';
import { getPopularPosts } from 'store/actions/postAction';
import { getCategories } from 'store/actions/categories';
import { getSiteInfo } from 'store/actions/siteData';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSiteInfo());
        dispatch(getPopularPosts());
    }, [dispatch]);
    const { popularPosts } = useSelector((state) => state);
    return (
        <Router>
            <div className="App">
                <div className="main">
                    {/* <Header /> */}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/:page" element={<PrivateRouter />}>
                            <Route
                                exact
                                path="/:page"
                                element={<PageRender />}
                            />
                        </Route>
                        <Route
                            exact
                            path="/:page/:id"
                            element={<PrivateRouter />}
                        >
                            <Route
                                exact
                                path="/:page/:id"
                                element={<PageRender />}
                            />
                        </Route>
                    </Routes>
                    {/* <PopularPosts
                        popularPosts={[...popularPosts.popular_posts]}
                    /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </div>
        </Router>
    );
}

export default App;
