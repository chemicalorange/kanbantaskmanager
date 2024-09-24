import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        boards: [
            {
                id: '123',
                name: 'hello world'
            },
            {
                id: 'sdgsgsd',
                name: 'lorem ipsum'
            },
            {
                id: 'xcdsv',
                name: 'dolor sit amet'
            },
            {
                id: 'jge',
                name: 'buratino'
            },
        ]
    },
    reducers: {

    }
})

export default appSlice.reducer