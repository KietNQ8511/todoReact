import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";

function TodoItem(props) {
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;

	const style = isLightTheme ? light : dark;
	//reducer dispatch delete function
	const { dispatch } = useContext(TodoContext);

	return (
		<li
			style={style}
			onClick={() => {
				dispatch({
					type: DELETE_TODO,
					payload: {
						id: props.todo.id,
					},
				})}
			}
			// arrow function
		>
			{props.todo.title}
		</li>
	);
}

export default TodoItem;
