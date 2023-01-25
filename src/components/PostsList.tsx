import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const PostList: React.FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.post);
    const {fetchPosts} = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export default PostList;
