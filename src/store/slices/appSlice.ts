import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        boards: [
            {
                boardId: '123',
                boardName: 'hello world'
            },
            {
                boardId: 'sdgsgsd',
                boardName: 'lorem ipsum'
            },
            {
                boardId: 'xcdsv',
                boardName: 'dolor sit amet'
            },
            {
                boardId: 'jge',
                boardName: 'buratino'
            },
        ]
    },
    reducers: {

    }
})

export default appSlice.reducer