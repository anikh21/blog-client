import axios from 'axios';
import Posts from 'components/Posts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDocumentTitle from 'utils/useDocumentTitle';
const Search = () => {
    let [searchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState('');
    const [state, setState] = useState({});
    const getSearchResult = async (query, page = 1) => {
        try {
            const result = await axios.get(
                `/api/v1/posts/search?query=${query}&page=${page}`,
            );
            setState(result.data.data);

            setSearchResult(result.data.data.docs);
        } catch (error) {}
    };

    useEffect(() => {
        const query = searchParams.get('query');
        setQuery(query);
        getSearchResult(query);
    }, [searchParams]);

    const fetchData = (page) => {
        getSearchResult(query, page);
    };
    useDocumentTitle('Search');
    return (
        <div className="search bg-gray-100 pt-8">
            <h1 className="text-center text-5xl font-bold">Search Result:</h1>
            {searchResult.length === 0 && (
                <h1 className="font-bold text-3xl text-red-600 text-center my-4">
                    Not found anything with this query: {query}
                </h1>
            )}
            <Posts
                items={searchResult}
                limit={state.limit}
                total={state.totalDocs}
                getItems={fetchData}
            />
        </div>
    );
};

export default Search;
