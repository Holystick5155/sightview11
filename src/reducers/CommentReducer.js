const commentReducer = (
    state = { comments: null, loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        // belongs to PostShare.jsx
        case "ADD_COMMENT_START":
            return { ...state, error: false, uploading: true };
        case "ADD_COMMENT_SUCCESS":
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        case "ADD_COMMENT_FAIL":
            return { ...state, uploading: false, error: true };

        case "ADD_REPLY_START":
            return { ...state, error: false, uploading: true };
        case "ADD_REPLY_SUCCESS":
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        case "ADD_REPLY_FAIL":
            return { ...state, uploading: false, error: true };
        // belongs to Posts.jsx
        case "GET_COMMENT_START":
            return { ...state, loading: true, error: false };
        case "GET_COMMENT_SUCCESS":
            return { ...state, posts: action.data, loading: false, error: false };
        case "GET_COMMENT_FAIL":
            return { ...state, loading: false, error: true };
        case "DELETE_COMMENT_START":
            return { ...state, error: false }
        case "DELETE_COMMENT_SUCCESS":
            return { ...state, posts: action.data, error: false }
        case "DELETE_COMMENT_FAIL":
            return { ...state, error: true }
        default:
            return state;
    }
};

export default commentReducer;
