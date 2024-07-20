// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils';

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
    try {
        const response = await fetch(`${API_URL}api/web/init`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data?.data;
    } catch (error) {
        throw new Error('Something went wrong. Please try again!!');
    }
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
