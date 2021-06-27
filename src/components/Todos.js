import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todos = (props) => {
	const { todos } = useContext(TodoContext);
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<div className="todo__list">
			<TodoForm />
			{ isAuthenticated ? <ul>
				{ todos.map((todo) =>
					<TodoItem todo={todo} key={todo.id} />
				)}
			</ul> : ''}
		</div>
	);
};

export default Todos;
