// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
        const dataJson = {
            id: "1",
            firstName: "Trung",
            lastName: "Ho",
            gender: "1",
            dateOfBirth: "17/11/1111",
            email: "hotintrung@gmail.com",
            phone: "131313133",
            profilePicture: "string",
            altProfilePicture: "string",
            bio: "string",
            occupation: "string",
            address: "string",
            facebookUrl: "string",
            instagramUrl: "string",
            twitterUrl: "string",
            skills: [
                {
                    "id": "string",
                    "name": "string",
                    "star": "int",
                    "order": "int"
                }
            ],
            interests: [
                {
                    "id": "string",
                    "name": "string",
                    "order": "int"
                }
            ]
        }
        return dataJson;

});

const initialState = {
    user: null,
    loadingUser: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loadingUser = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.user = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loadingUser = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
