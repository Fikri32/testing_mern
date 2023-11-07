import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../Slice/authSlice";

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

const Layout = ({ children }) => {
	
	useScript("/js/codebase.core.min.js");
	useScript("/js/codebase.app.min.js");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError } = useSelector((state) => state.auth);

	useEffect(() => {
      dispatch(getMe())
   },[dispatch]);

   useEffect(() => {
      if(isError){
         navigate("/")
      }
   })
	return (
		<React.Fragment>
			<div
				id="page-container"
				className="sidebar-mini sidebar-o sidebar-inverse enable-page-overlay side-scroll page-header-fixed page-header-glass page-header-inverse main-content-boxed"
			>
				{/* <!-- Sidebar--> */}
				<Sidebar></Sidebar>
				{/* <!-- END Sidebar --> */}

				{/* <!-- Header --> */}
				<Header></Header>
				{/* <!-- END Header --> */}

				{/* <!-- Main Container --> */}
				<main id="main-container">
					{/* <!-- Page Content --> */}
					{children}
					{/* <!-- END Page Content --> */}
				</main>
				{/* <!-- END Main Container --> */}

				{/* <!-- Footer --> */}
				<Footer></Footer>
				{/* <!-- END Footer --> */}
			</div>
		</React.Fragment>
	);
};

export default Layout;
