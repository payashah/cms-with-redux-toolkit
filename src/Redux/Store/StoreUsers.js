import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk("Users/getUsersFromServer",
    async () => {
        return fetch("https://redux-cms.iran.liara.run/api/users")
            .then(res => res.json())
            .then(data => data)
    }
)
export const removeUser = createAsyncThunk("Users/removeUser",
    async (id) => {
        return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, {
            method: "DELETE"
        })
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
            return action.payload
        })
        builder.addCase(removeUser.fulfilled, (state, action) => {
            const UsersAfterRemove = state.filter((user) =>
                user._id !== action.payload.id
            )
            return UsersAfterRemove
        })
    }
})

export default Slice.reducer