import { createSlice } from "@reduxjs/toolkit";
import Board from "../../interfaces/Board";

const initialState: { colorSchema: 'black' | 'white', currentBoardId: string | null, boards: Partial<Board>[] } = {
    boards: [],
    currentBoardId: null,
    colorSchema: 'black'
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        createBoard: (state, action) => {
            state.boards.push(action.payload.boardData)
        },
        createColumn: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            state.boards[index].columns?.push(action.payload.columnData)
        },
        createTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            const columnIndex = state.boards[index].columns.findIndex(item => item.id === action.payload.columnId)
            state.boards[index].columns[columnIndex].tasks.push(action.payload.taskData)
        },
        createSubTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            const columnIndex = state.boards[index].columns?.findIndex(item => item.id === action.payload.columnId)
            const taskIndex = state.boards[index].columns[columnIndex].tasks.findIndex(item => item.id === action.payload.taskId)
            state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks.push(action.payload.subtaskData)
        },
        // editBoad: (state, action) => {
        //     switch (action.payload.type){
        //         case 'editBoardName': {
        //             const currentBoardIndex = state.boards.findIndex(item => item.id === state.currentBoardId)
        //             state.boards[currentBoardIndex].name = action.payload.name
        //             break;
        //         }
        //         case 'editBoardColumnName': {
        //             const currentBoardIndex = state.boards.findIndex(item => item.id === state.currentBoardId)
        //             const currentColumnIndex = state.boards[currentBoardIndex].columns?.findIndex(item => item.id === action.payload.columnId)
        //             state.boards[currentBoardIndex].columns[currentColumnIndex].name = action.payload.name
        //         }
                
        //     }
        // },
        // editTask: (state, action) => {
        //     switch (action.payload.type) {
        //         case 'editTaskName': {
        //             const currentTask
        //         }
        //         case 'editTaskDescription': {

        //         }
        //         case 'editTaskStatus': {

        //         }
        //     }
        // },
        // editSubtask: (state, action) => {

        // },
        deleteBoard: (state, action) => {
            state.boards = state.boards.filter(item => item.id !== action.payload.boardId)
        },
        deleteColumn: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            state.boards[index].columns = state.boards[index].columns?.filter(item => item.id !== action.payload.columnId)
        },
        deleteTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            const columnIndex = state.boards[index].columns.findIndex(item => item.id === action.payload.columnId)
            state.boards[index].columns[columnIndex].tasks = state.boards[index].columns[columnIndex].tasks.filter(item => item.id !== action.payload.taskId)
        },
        deleteSubtask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === action.payload.boardId)
            const columnIndex = state.boards[index].columns?.findIndex(item => item.id === action.payload.columnId)
            const taskIndex = state.boards[index].columns[columnIndex].tasks.findIndex(item => item.id === action.payload.taskId)
            state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks = state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks.filter(item => item.id !== action.payload.subtaskId)
        },
        setCurrentBoard: (state, action) => {
            state.currentBoardId = action.payload.id
        },
        setColorSchema: (state, action) => {
            state.colorSchema = action.payload.colorSchema
        }
    }
})

export const { createBoard, createColumn, createTask, createSubTask } = appSlice.actions
export const { deleteBoard, deleteColumn, deleteTask, deleteSubtask } = appSlice.actions
export const { setCurrentBoard, setColorSchema } = appSlice.actions

export default appSlice.reducer