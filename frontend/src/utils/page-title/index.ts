import { useRef, useEffect } from 'react';

function usePageTitle(title: string) {
    const defaultTitle = useRef(document.title);
    useEffect(() => {
        document.title = "Chat App" + ` | ${title}`;
    }, [title]);
}

export default usePageTitle;
