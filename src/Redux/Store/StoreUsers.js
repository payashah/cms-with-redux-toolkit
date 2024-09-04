import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk("Users/getUsersFromServer",
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)






const Slice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
            console.log(state);

            return action.payload
        })
    }
})

export default Slice.reducer