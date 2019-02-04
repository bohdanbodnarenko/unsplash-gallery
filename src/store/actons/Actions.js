import Axios from "axios";
import {
    getLinkToPosts,
    getLinkToRandomPost
} from "../../Environment/env";
import {
    SET_POSTS
} from "./ActionTypes";

export const getPosts = (count) => {
    return (dispatch) => {
        Axios.get(getLinkToPosts(count)).then(resp => {
            dispatch({
                type: SET_POSTS,
                posts: resp
            })
        })
    }
}