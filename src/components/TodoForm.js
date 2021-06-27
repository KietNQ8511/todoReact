import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"
import { TodoContext  } from "../contexts/TodoContext"
import { ADD_TODO } from "../reducers/types";
import {v4 as uuidv4} from 'uuid';

function TodoForm() {
	const [title, setTitle] = useState("");
	//Load theme
	const { theme } = useContext(ThemeContext);
	const {isLightTheme, light, dark } = theme;

	//style
	const style = isLightTheme ? light : dark;

	const { dispatch } = useContext(TodoContext);

	const onTitleChange = (event) => {
		setTitle(event.target.value);
	};

    const handleSubmit = event => {
        event.preventDefault();
        dispatch ({
            type: ADD_TODO,
			payload: {
				todo: {
					id: uuidv4(),
					title
				}
			}
        })
        setTitle('')
    }

	return (
		<div className="todo__form">
			<form id="todo__form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="new todo ..."
					onChange={onTitleChange}
					value={title}
					required
					style={style}
				/>
				<input type="submit" value="Add" style={style}/>
			</form>
		</div>
	);
}

export default TodoForm;
