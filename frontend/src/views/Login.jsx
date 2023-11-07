import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../Slice/authSlice";

const useScript = (src) => {
	useEffect(() => {
		const tag = document.createElement("script");
		tag.async = false;
		tag.src = src;
		// tag.type = "text/jsx";
		document.body.appendChild(tag);

		return () => {
			document.body.removeChild(tag);
		};
	}, [src]);
};
const Login = () => {
	useScript("/js/codebase.core.min.js");
	useScript("/js/codebase.app.min.js");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate("/dashboard");
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ name, password }));
	};
	return (
		<>
			<div
				className="bg-image"
				// style="background-image: url('assets/media/photos/photo34@2x.jpg');"
			>
				<div className="row mx-0 bg-black-op">
					<div className="hero-static col-md-6 col-xl-8 d-none d-md-flex align-items-md-end">
						<div className="p-30 invisible" data-toggle="appear">
							<p className="font-size-h3 font-w600 text-white">
								Get Inspired and Create.
							</p>
							<p className="font-italic text-white-op">
								Copyright &copy; <span className="js-year-copy"></span>
							</p>
						</div>
					</div>
					<div
						className="hero-static col-md-6 col-xl-4 d-flex align-items-center bg-white invisible"
						data-toggle="appear"
						data-class="animated fadeInRight"
					>
						<div className="content content-full">
							<div className="px-30 py-10">
								<a className="link-effect font-w700" href="index.html">
									<i className="si si-fire"></i>
									<span className="font-size-xl text-primary-dark">code</span>
									<span className="font-size-xl">base</span>
								</a>
								<h1 className="h3 font-w700 mt-30 mb-10">
									Welcome to TPA Nurul Ilmi
								</h1>
								<h2 className="h5 font-w400 text-muted mb-0">Please sign in</h2>
							</div>
							<form
								onSubmit={Auth}
								className="js-validation-signin px-30"
								action="be_pages_auth_all.html"
								method="post"
							>
								{isError && <p className="has-text-centered">{message}</p>}
								<div className="form-group row">
									<div className="col-12">
										<div className="form-material floating">
											<input
												type="text"
												className="form-control"
												id="login-username"
												name="login-username"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
											<label htmlFor="login-username">Username</label>
										</div>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-12">
										<div className="form-material floating">
											<input
												type="password"
												className="form-control"
												id="login-password"
												name="login-password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
											<label htmlFor="login-password">Password</label>
										</div>
									</div>
								</div>

								<div className="form-group">
									<button
										type="submit"
										className="btn btn-sm btn-hero btn-alt-primary"
									>
										<i className="si si-login mr-10"></i>{" "}
										{isLoading ? "Loading..." : "Login"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default Login;
