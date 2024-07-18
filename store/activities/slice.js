// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    const dataJson = [
        {
            id: "string1",
            title: "Amazing Blog",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            altImage: "string"
        },

        {
            id: "string2",
            title: "Amazing Blog 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            altImage: "string"
        },

        {
            id: "string3",
            title: "Amazing Blog 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            altImage: "string"
        },
        {
            id: "string4",
            title: "Amazing Blog",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            altImage: "string"
        },

        {
            id: "string5",
            title: "Amazing Blog 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            altImage: "string"
        },

        {
            id: "string6",
            title: "Amazing Blog 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            categoryId: "string",
            createdDate: "2022-07-15T11:50:54.000Z",
            updatedDate: "2022-07-15T11:50:54.000Z",
            isPublish: "bool",
            publishedDate: "2022-07-15T11:50:54.000Z",
            video: "string",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            altImage: "string"
        }
    ]
    return dataJson;
});

export const fetchActivityDetail = createAsyncThunk('activities/fetchActivityDetail', async (activityId) => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    const dataJson =  {
        id: "string6",
        title: "Amazing Blog 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        categoryId: "string",
        createdDate: "2022-07-15T11:50:54.000Z",
        updatedDate: "2022-07-15T11:50:54.000Z",
        isPublish: "bool",
        publishedDate: "2022-07-15T11:50:54.000Z",
        video: "string",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        altImage: "string"
    }
    return dataJson;
});

const initialState = {
    activityList: null,
    loadingList: false,
    errorList: null,

    activityDetail: null,
    loadingDetail: false,
    errorDetail: null,
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.loadingList = true;
                state.errorList = null;
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.loadingList = false;
                state.activityList = action.payload;
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

export default activitiesSlice.reducer;
