import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./form/TodoForm";
import TodoItems from "./items/TodoItems";
import TodoFooter from "./footer/TodoFooter";
import {
    addTodo, deleteTodo, checkTodo, clearCompleted,
    editTodo, changeEditId, selectTodos, changeValue
} from "../features/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch()

    const { todos, value, editId } = useSelector(selectTodos)

    console.log(
        "Todos:", todos, ";",
        "Value:", value, ";",
        "EditId:", editId
    )
    return (
        <section className="bg-white rounded-2xl leading-[3] font-raleway max-w-full">
            <div className="w-[700px]">
                <TodoForm
                    value={value}
                    editId={editId}
                    onAdd={(val) => dispatch(addTodo(val))}
                    onUpdate={(id, newText) => dispatch(editTodo(id, newText))}
                    onChange={(e) => dispatch(changeValue(e))}
                    onClearValue={(val) => dispatch(changeValue(val))}
                    onClearEditId={(id) => dispatch(changeEditId(id))}
                />
                <TodoItems
                    todos={todos}
                    onChange={(id) => dispatch(checkTodo(id))}
                    onChangeEditId={(id) => dispatch(changeEditId(id))}
                    onChangeEditValue={(val) => dispatch(changeValue(val))}
                    onDelete={(id) => dispatch(deleteTodo(id))}
                />
                <TodoFooter
                    todos={todos}
                    onClearCompleted={() => dispatch(clearCompleted())}
                />
            </div>
        </section>
    );
};

export default TodoList;
