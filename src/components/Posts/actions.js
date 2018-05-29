export const FETCH_POSTS = 'FETCH_POSTS';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};
