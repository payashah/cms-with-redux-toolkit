import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk("Courses/getCoursesFromServer",
    async () => {
        return fetch("https://redux-cms.iran.liara.run/api/courses")
            .then(res => res.json())
            .then(data => data)
    }
)
export const removeCourse = createAsyncThunk("Courses/removeCourse",
    async (id) => {
        return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => data)
    }
)


const Slice = createSlice({
    name: "Courses",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(removeCourse.fulfilled, (state, action) => {
            const coursesAfterRemove = state.filter((course) =>
                course._id !== action.payload.id
            )
            return coursesAfterRemove
        })
    }



})

export default Slice.reducer