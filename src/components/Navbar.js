import React, { useContext, } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
	//load themeContext
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const style = isLightTheme ? light : dark;

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);

	return (
		<div className="navbar" style={style}>
			<h1>My Hooks app</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>
					{isAuthenticated
						? "you are logged in"
						: ""}
                    <button onClick={toggleAuth}>
                        {isAuthenticated ? "Logout" : "Login"}
                    </button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
