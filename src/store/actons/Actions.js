import Axios from "axios";
import {
    getLinkToPosts,
    getLinkToQueryPosts,
} from "../../Environment/env";
import {
    SET_HOME_POSTS, SET_SEARCH_POSTS
} from "./ActionTypes";

export const getPosts = (count) => {
    return (dispatch) => {
        Axios.get(getLinkToPosts(count)).then(resp => {
            dispatch({
                type: SET_HOME_POSTS,
                posts: resp.data
            })
        })
    }
}

export const getPostsByQuery = (count, query) => {
    return (dispatch) => {
        console.log(query)
        Axios.get(getLinkToQueryPosts(count, query)).then(resp => {
            console.log(resp)
            dispatch({
                type: SET_SEARCH_POSTS,
                posts: resp.data.results
            })
        }).catch(err=>alert(err))
    }
}