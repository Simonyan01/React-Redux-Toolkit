import { createSlice } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos

const initialTodos = [
    {
        id: Math.random(),
        text: "Learn React hooks",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn CSS framework",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn English",
        isCompleted: false,
    }
]

const TodoSlice = createSlice({
    name: "To do List",
    initialState: {
        todos: initialTodos,
        value: "",
        editId: null
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [{
                id: Math.random(),
                text: action.payload,
                isCompleted: false
            }, ...state.todos]
        },
        checkTodo: (state, action) => {
            state.todos = state.todos.map(
                (todo) => todo.id === action.payload.id
                    ? action.payload
                    : todo)
        },
        editTodo: (state, action) => {
            state.todos.find((todo) => todo.id === action.payload.editId).text = action.payload.value;
        },
        changeEditId: (state, action) => {
            state.editId = action.payload
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(val => val.id !== action.payload.id)
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.isCompleted)
        }
    }
})

export const { changeValue, addTodo, checkTodo, editTodo, changeEditId, deleteTodo, clearCompleted } = TodoSlice.actions

export default TodoSlice.reducer

