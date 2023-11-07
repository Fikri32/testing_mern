import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../Slice/authSlice";

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate("/");
	};
	return (
		<>
			{/* <!-- Sidebar --> */}
			<nav id="sidebar">
				{/* <!-- Sidebar Content --> */}
				<div className="sidebar-content">
					{/* <!-- Side Header --> */}
					<div className="content-header content-header-fullrow px-15">
						{/* <!-- Mini Mode --> */}
						<div className="content-header-section sidebar-mini-visible-b">
							{/* <!-- Logo --> */}
							<span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
								<span className="text-dual-primary-dark">c</span>
								<span className="text-primary">b</span>
							</span>
							{/* <!-- END Logo --> */}
						</div>
						{/* <!-- END Mini Mode --> */}

						{/* <!-- Normal Mode --> */}
						<div className="content-header-section text-center align-parent sidebar-mini-hidden">
							<button
								type="button"
								className="btn btn-circle btn-dual-secondary d-lg-none align-v-r"
								data-toggle="layout"
								data-action="sidebar_close"
							>
								<i className="fa fa-times text-danger"></i>
							</button>
							{/* <!-- END Close Sidebar --> */}

							{/* <!-- Logo --> */}
							<div className="content-header-item">
								<a className="link-effect font-w700" href="index.html">
									<i className="si si-fire text-primary"></i>
									<span className="font-size-xl text-dual-primary-dark">
										code
									</span>
									<span className="font-size-xl text-primary">base</span>
								</a>
							</div>
							{/* <!-- END Logo --> */}
						</div>
						{/* <!-- END Normal Mode --> */}
					</div>
					{/* <!-- END Side Header --> */}

					{/* <!-- Side User --> */}
					<div className="content-side content-side-full content-side-user px-10 align-parent">
						{/* <!-- Visible only in mini mode --> */}
						<div className="sidebar-mini-visible-b align-v animated fadeIn">
							<img
								className="img-avatar img-avatar32"
								// src="assets/media/avatars/avatar1/5.jpg"
								alt=""
							/>
						</div>
						{/* <!-- END Visible only in mini mode --> */}

						{/* <!-- Visible only in normal mode --> */}
						<div className="sidebar-mini-hidden-b text-center">
							<a className="img-link" href="be_pages_generic_profile.html">
								<img
									className="img-avatar"
									// src="assets/media/avatars/avatar15.jpg"
									alt=""
								/>
							</a>
							<ul className="list-inline mt-10">
								<li className="list-inline-item">
									<a
										className="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase"
										href="be_pages_generic_profile.html"
									>
										{user && user.name}
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="link-effect text-dual-primary-dark"
										onClick={logout}
										href="/"
									>
										<i className="si si-logout"></i>
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- END Visible only in normal mode --> */}
					</div>
					{/* <!-- END Side User --> */}

					{/* <!-- Side Navigation --> */}
					<div className="content-side content-side-full">
						<ul className="nav-main">
							<li>
								<NavLink to={"/dashboard"}>
									<i className="si si-cup"></i>
									<span className="sidebar-mini-hide">Dashboard</span>
								</NavLink>
							</li>
							<li className="nav-main-heading">
								<span className="sidebar-mini-visible">MN</span>
								<span className="sidebar-mini-hidden">Menu</span>
							</li>
							<li>
								<NavLink to={"/role"}>
									<i className="si si-user"></i>
									<span className="sidebar-mini-hide">Management Role</span>
								</NavLink>
							</li>
							{user && user.role === 1 && (
								<li>
									<NavLink to={"/user"}>
										<i className="si si-user"></i>
										<span className="sidebar-mini-hide">Management User</span>
									</NavLink>
								</li>
							)}

							<li>
								<NavLink to={"/logout"}>
									<i className="si si-user"></i>
									<span className="sidebar-mini-hide">Logout</span>
								</NavLink>
							</li>
							<li>
								<a className="nav-submenu" data-toggle="nav-submenu" href="/">
									<i className="si si-trophy"></i>
									<span className="sidebar-mini-hide">Components</span>
								</a>
								<ul>
									<li>
										<a href="be_comp_syntax_highlighting.html">
											Syntax Highlighting
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					{/* <!-- END Side Navigation --> */}
				</div>
				{/* <!-- Sidebar Content --> */}
			</nav>
		</>
	);
};
export default Sidebar;
