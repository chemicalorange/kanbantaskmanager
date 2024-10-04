import { createSlice } from "@reduxjs/toolkit";
import Board from "../../interfaces/Board";
import randomColor from "randomcolor";

const initialState: { colorSchema: 'black' | 'white', currentBoardId: string | null, boards: Board[] } = {
    boards: [
      {
        name: 'Test Board',
        id: '1',
        columns: [
          { name: 'Todo', id: '1', hex: randomColor({format: "hex", luminosity: 'light'}), tasks: [{id: '123', name: '124243', description: 'asfsfas', status: false, subtasks: []}] },
          { name: 'In Progress', id: '2', hex: randomColor({format: "hex", luminosity: 'light'}), tasks: [] },
          { name: 'Done', id: '3', hex: randomColor({format: "hex", luminosity: 'light'}), tasks: [] }
        ]
      }
    ],
    currentBoardId: '1',
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
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            state.boards[index].columns?.push(action.payload.columnData)
        },
        createTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            const columnIndex = state.boards[index].columns.findIndex(item => item.id === action.payload.columnId)
            state.boards[index].columns[columnIndex].tasks.push(action.payload.taskData)
        },
        createSubTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            const columnIndex = state.boards[index].columns?.findIndex(item => item.id === action.payload.columnId)
            const taskIndex = state.boards[index].columns[columnIndex].tasks.findIndex(item => item.id === action.payload.taskId)
            state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks.push(action.payload.subtaskData)
        },
        deleteBoard: (state) => {
            state.boards = state.boards.filter(item => item.id !== state.currentBoardId)
        },
        deleteColumn: (state, action) => {
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            state.boards[index].columns = state.boards[index].columns?.filter(item => item.id !== action.payload.columnId)
        },
        deleteTask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            const columnIndex = state.boards[index].columns.findIndex(item => item.id === action.payload.columnId)
            state.boards[index].columns[columnIndex].tasks = state.boards[index].columns[columnIndex].tasks.filter(item => item.id !== action.payload.taskId)
        },
        deleteSubtask: (state, action) => {
            const index = state.boards.findIndex(item => item.id === state.currentBoardId)
            const columnIndex = state.boards[index].columns?.findIndex(item => item.id === action.payload.columnId)
            const taskIndex = state.boards[index].columns[columnIndex].tasks.findIndex(item => item.id === action.payload.taskId)
            state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks = state.boards[index].columns[columnIndex].tasks[taskIndex].subtasks.filter(item => item.id !== action.payload.subtaskId)
        },
        changeBoard: (state, action) => {
            const updatedBoard = action.payload.boardData;
            state.boards = state.boards.map(item => 
                item.id === state.currentBoardId ? updatedBoard : item
            );
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
export const { changeBoard } = appSlice.actions
export const { setCurrentBoard, setColorSchema } = appSlice.actions

export default appSlice.reducer