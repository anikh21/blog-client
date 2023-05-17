import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useDocumentTitle(title, prevailOnUnmount = false) {
    const defaultTitle = useRef(document.title);
    const { siteInfo } = useSelector((state) => state);
    useEffect(() => {
        document.title =
            (siteInfo.siteInfo.siteName &&
                `${title} - ${siteInfo.siteInfo.siteName}`) ||
            '';
    }, [title, siteInfo]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        [prevailOnUnmount],
    );
}

export default useDocumentTitle;
