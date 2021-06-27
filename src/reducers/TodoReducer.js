import { ADD_TODO, GET_TODOS, DELETE_TODO, SAVE_TODOS } from "./types";

export const todoReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		//localStorage get
		case GET_TODOS:
			console.log("getting todo ...");
			const todos = localStorage.getItem("todos");
			if (todos) state = JSON.parse(todos);
			return state;
		//localStorage set

		case SAVE_TODOS:
			console.log("saving todos ... ");
			localStorage.setItem(
				"todos",
				JSON.stringify(payload.todos)
			);
			return state;

		case ADD_TODO:
			return [...state, payload.todo];

		case DELETE_TODO:
			return state.filter(
				(todo) => todo.id !== payload.id
			);

		default:
			return state;
	}
};

export default todoReducer;
