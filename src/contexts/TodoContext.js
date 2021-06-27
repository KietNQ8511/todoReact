import React, { createContext, useEffect, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
	//use Reducer so i
	// const [todos, setTodo] = useState([
	// 	{ id: 1, title: "Việc 1" },
	// 	{ id: 2, title: "Việc 2" },
	// 	{ id: 3, title: "Việc 3" },
	// ]);

	const [todos, dispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		dispatch({
			type: SAVE_TODOS,
			payload: {todos}
		})
	} , [todos])

	useEffect(() => {
		dispatch({
			type: GET_TODOS,
			payload: null,
		});
	}, []);



	// const addTodo = (todo) => {
	// 	setTodo([...todos, todo]);
	// };

	// const deleteTodo = (id) => {
	// 	setTodo(todos.filter((todo) => todo.id !== id));
	// };

	const todoValue = {
		todos,
		dispatch,
	};

	return (
		<TodoContext.Provider value={todoValue}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
