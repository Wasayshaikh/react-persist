import { createSlice } from "@reduxjs/toolkit";

type postType = {
    posts: Array<{ id: number | string, title: string, body: string }>,
};
let initialState: postType = {
    posts: [{
        id: 1, title: "Post One", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum atque at ab. Tempora eveniet, vero distinctio sequi harum beatae saepe molestiae aut, recusandae odio officia amet nam vitae quia!"
    },
    {
        id: 2, title: "Post two", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum atque at ab. Tempora eveniet, vero distinctio sequi harum beatae saepe molestiae aut, recusandae odio officia amet nam vitae quia!"
    }
    ]
}
const PostReducer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        AddPost(state, action) {
            state.posts.push(action.payload)
        },

    }

})
export const getPosts = (state: { posts: postType }) => state.posts.posts;
export const { AddPost } = PostReducer.actions
export default PostReducer.reducer
