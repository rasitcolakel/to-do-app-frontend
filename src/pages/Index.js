import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, updateTodos, deleteTodos, newTodo } from "store/actions";
import { BiPlus, BiTrash } from "react-icons/bi";
export default function Index() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  React.useEffect(() => dispatch(getTodos()), []);
  React.useEffect(() => console.log("todos", todos), [todos]);
  const [title, setTitle] = React.useState("");

  return (
    <div className="flex w-full white-bg flex-col rounded-xl p-8 mt-4">
      <span className={"text-2xl white-text border-b-2 gray-border"}>
        To-Dos ({todos.length})
      </span>
      <form
        className="mb-3 mt-3 flex"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(newTodo({ title: title }));
          setTitle("");
        }}
      >
        <input
          name="title"
          value={title}
          type="text"
          placeholder="Add a new todo"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="input !flex-1 !mb-0"
        />

        <button type="submit" className="icon-button text-2xl ml-2">
          <BiPlus />
        </button>
      </form>
      <div class="divide-y gray-divide">
        {todos.map((todo, key) => (
          <div key={key} className={"flex items-center p-2 justify-between"}>
            <div
              className={todo.status ? "dot-ok" : "dot"}
              onClick={() =>
                dispatch(
                  updateTodos({
                    _id: todo._id,
                    status: todo.status === 1 ? 0 : 1,
                    title: todo.title,
                  })
                )
              }
            ></div>

            <span
              className={`text-xl px-2 white-text flex-1 ${
                todo.status ? "line-through" : ""
              }`}
            >
              {todo.title}
            </span>
            <span
              className={"trash-icon text-2xl"}
              onClick={() =>
                dispatch(
                  deleteTodos({
                    _id: todo._id,
                  })
                )
              }
            >
              <BiTrash />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
