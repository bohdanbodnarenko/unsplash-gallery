const initState = {
    homePosts:[],
    searchPosts:[]
}

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_HOME_POSTS':
            return {...state,homePosts:action.posts};
        case 'SET_SEARCH_POSTS':
            return {...state,searchPosts:action.posts};
        default:
            return state;
    }
}

export default postsReducer;