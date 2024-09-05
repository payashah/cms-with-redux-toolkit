import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk("Articles/getArticlesFromServer",
    async (url) => {
        return fetch(url)
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
    }


})

export default Slice.reducer