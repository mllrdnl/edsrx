import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

import '../styles/login.css';

export function LoginUser() {
    const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const navigate = useNavigate();
	// const { store, actions } = React.useContext(Context);
	const auth = useAuth();

	React.useEffect(() => {
		if (auth.authToken) {
			navigate.push("/home");
		}
	}, [auth.authToken]);

	return (
		<div className="container">
			
			{/* {auth.authError && <div className="alert alert-danger">Authentication Error</div>} */}

			<div className="loginform">
			<h3>Clinic Login</h3>
				<label>EMAIL</label>
				<input
					value={email}
					onChange={ev => setEmail(ev.target.value)}
					type="email"
					className="form-control"
					placeholder="name@example.com"
				/>
			
				<label>PASSWORD</label>
				<input
					value={password}
					onChange={ev => setPassword(ev.target.value)}
					type="password"
					className="form-control"
					placeholder="Enter your password here"
				/>
			
				<button className="loginButton" onClick={() => auth.loginUser(email, password)}><strong>
					LOGIN</strong>
				</button>

			</div>
		</div>
	);
}