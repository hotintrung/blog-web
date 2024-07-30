// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async (page) => {
    try {
        const response = await fetch(`${API_URL}api/web/activities?Page=${page}&PageSize=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data?.data;
    } catch (error) {
        throw new Error('Something went wrong. Please try again!!');
    }
});

export const fetchActivityDetail = createAsyncThunk('activities/fetchActivityDetail', async (activityId) => {
    try {
        const response = await fetch(`${API_URL}api/web/activities/${activityId}`);
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
    page: 1,
    totalItems: 0,
    activityList: [],
    loadingList: false,
    errorList: null,

    activityDetail: null,
    loadingDetail: false,
    errorDetail: null,
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        incrementPage(state) {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.loadingList = true;
                state.errorList = null;
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.loadingList = false;
                state.activityList = [...state.activityList, ...action.payload.items];
                state.totalItems = action.payload.totalItems
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                state.loadingList = false;
                state.errorList = action.error.message;
            })
            .addCase(fetchActivityDetail.pending, (state) => {
                state.loadingDetail = true;
                state.errorDetail = null;
            })
            .addCase(fetchActivityDetail.fulfilled, (state, action) => {
                state.loadingDetail = false;
                state.activityDetail = action.payload;
            })
            .addCase(fetchActivityDetail.rejected, (state, action) => {
                state.loadingDetail = false;
                state.errorDetail = action.error.message;
            });
    }
});
export const { incrementPage } = activitiesSlice.actions;
export default activitiesSlice.reducer;
