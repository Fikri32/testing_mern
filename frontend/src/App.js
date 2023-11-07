import "./dist/css/codebase.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import React from "react";
import Role from "./views/role/Role";
import AddRole from "./views/role/AddRole";
import EditRole from "./views/role/EditRole";
import User from "./views/user/User";

function App() {
	return (
		<div>
			{/* <Helmet></Helmet> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					{/* Role Routes */}
					<Route path="/role" element={<Role />} />
					<Route path="/role/add" element={<AddRole />}/>
					<Route path="/role/edit/:id" element={<EditRole />} />
					{/* User Routes */}
					<Route path="/user" element={<User />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
