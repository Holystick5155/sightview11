// commentActions.js
import * as api from "../api/ChatRequests";

export const createComment = (comment) => async (dispatch) => {
    dispatch({ type: "ADD_COMMENT_START" });
    try {
        const response = await api.createComment(comment);
        dispatch({ type: "ADD_COMMENT_SUCCESS", data: response });
    } catch (error) {
        dispatch({ type: "ADD_COMMENT_FAIL" });
    }
};

export const createReply = (reply) => async (dispatch) => {
    dispatch({ type: "ADD_REPLY_START" });
    try {
        const response = await api.createReply(reply);
        dispatch({ type: "ADD_REPLY_SUCCESS", data: response });
    } catch (error) {
        dispatch({ type: "ADD_REPLY_FAIL" });
    }
};




export const deleteComment = (id) => async (dispatch) => {
    dispatch({ type: "DELETE_COMMENT_START" });
    try {
        await api.deleteComment(id);
        dispatch({ type: "DELETE_COMMENT_SUCCESS" });
    } catch (error) {
        console.log(error);
        dispatch({ type: "DELETE_COMMENT_FAIL" });
    }
};

export const updateComment = (id, content) => async (dispatch) => {
    dispatch({ type: "UPDATE_COMMENT_START" });
    try {
        const response = await api.updateComment(id, content);
        dispatch({ type: "UPDATE_COMMENT_SUCCESS" });
    } catch (error) {
        dispatch({ type: "UPDATE_COMMENT_FAIL" });
    }
};


export const getComments = (postId) => async (dispatch) => {
    dispatch({ type: "GET_COMMENT_START" });
    try {
        const response = await api.getComments(postId);
        dispatch({ type: "GET_COMMENT_SUCCESS", data: response });
    } catch (error) {
        dispatch({ type: "GET_COMMENT_FAIL" });
    }
};





