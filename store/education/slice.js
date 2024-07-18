// store/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchEducation = createAsyncThunk('education/fetchEducation', async () => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
        const dataJson = {
            description: "I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.",
            experiences: [
              { "id": "1", "dates": "March 2022 - Present", "type": "Full Time", "position": "Frontend Engineer at X", "bullets": "Bullet One, Bullet Two" },
              { "id": "d495c23b-4f65-479a-9b8a-cfbc1c089725", "dates": "July 2020 - March 2022", "type": "Full Time", "position": "Frontend Engineer at X", "bullets": "Worked on the frontend of a React application, Worked on the frontend of a React application" }
            ],
            education: { "universityName": "University X", "universityDate": "2016-2020", "universityPara": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
            languages: ["Javascript", "HTML5", "CSS", "Python", "Go"], "frameworks": ["React", "Typescript", "NodeJs"],
            others: ["Figma", "AdobeXD", "AWS"]
          }
        return dataJson;

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
