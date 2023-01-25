import {PostsAction, PostsActionTypes, PostState} from '../../types/posts'

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action: PostsAction): PostState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: []}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {loading: false, error: null, posts: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []}
        default:
            return state
    }
}
