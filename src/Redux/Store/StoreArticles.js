import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk("Articles/getArticlesFromServer",
    async () => {
        return fetch("https://redux-cms.iran.liara.run/api/articles/")
            .then(res => res.json())
            .then(data => data)
    }
)
export const removeArticle = createAsyncThunk("Articles/removeArticle",
    async (id) => {
        return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => data)
    }
)


const Slice = createSlice({
    name: "Articles",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(removeArticle.fulfilled, (state, action) => {
            const articlesAfterRemove = state.filter((article) =>
                article._id !== action.payload.id
            )
            return articlesAfterRemove
        }

        )
    }


})

export default Slice.reducer