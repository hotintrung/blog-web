// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils';

export const fetchEducation = createAsyncThunk('education/fetchEducation', async () => {
    try {
        const response = await fetch(`${API_URL}api/web/init-education`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data?.data;
    } catch (error) {
        throw new Error('Something went wrong. Please try again!!');
    }
});

export const getFileById = createAsyncThunk('education/getFileById', async (item) => {
    try {

        const response = await fetch(`${API_URL}api/web/file-multi/${item.fileId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        const { url } = data?.data
        const fetchContentFile = await fetch(url);
        if (!fetchContentFile.ok) {
            throw new Error('Network fetchContentFile was not ok');
        }
        const blob = await fetchContentFile.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = item.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        return response;
    } catch (error) {
        throw new Error('Something went wrong. Please try again!!');
    }
});

const initialState = {
    education: null,
    loadingEducation: false,
    error: null,
};

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducation.pending, (state) => {
                state.loadingEducation = true;
                state.error = null;
            })
            .addCase(fetchEducation.fulfilled, (state, action) => {
                state.loadingEducation = false;
                state.education = action.payload;
            })
            .addCase(fetchEducation.rejected, (state, action) => {
                state.loadingEducation = false;
                state.error = action.error.message;
            });
    }
});

export default educationSlice.reducer;
