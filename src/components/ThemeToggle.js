import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div className="toggle__btn" onClick={toggleTheme}>
			<button>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggle;
