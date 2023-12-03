import * as PostsApi from "../api/PostsRequests";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getPost(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getAllPosts();
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

// export const deletePost = async (req, res) => {
//   const id = req.params.id;
//   const { userId } = req.body;

//   try {
//     const post = await PostModel.findById(id);
//     if (post.userId === userId) {
//       await post.deleteOne();
//       res.status(200).json("Post deleted.");
//     } else {
//       res.status(403).json("Action forbidden");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_POST_START" });
  try {
    await PostsApi.deletePost(id);
    dispatch({ type: "DELETE_POST_SUCCESS" });
    console.log("Post deleted")
  } catch (error) {
    console.log(error);
    dispatch({ type: "DELETE_POST_FAIL" });
  }
};
