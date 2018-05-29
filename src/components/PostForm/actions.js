export const ADD_POST = 'ADD_POST';

export const addPost = text => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(text)
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: ADD_POST,
                payload: post
            })
        );
};
