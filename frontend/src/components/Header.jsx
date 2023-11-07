import React from "react";
const Header = () => {
	return (
		<>
			{/* <!-- Header --> */}
			<header id="page-header">
				{/* <!-- Header Content --> */}
				<div className="content-header">
					{/* <!-- Left Section --> */}
					<div className="content-header-section">
						{/* <!-- Toggle Sidebar --> */}
						{/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
						<button
							type="button"
							className="btn btn-circle btn-dual-secondary"
							data-toggle="layout"
							data-action="sidebar_toggle"
						>
							<i className="fa fa-navicon"></i>
						</button>
						{/* <!-- END Toggle Sidebar --> */}

						{/* <!-- END Layout Options --> */}
					</div>
					{/* <!-- END Left Section --> */}

					{/* <!-- Right Section --> */}
					<div className="content-header-section">
						{/* <!-- User Dropdown --> */}
						<div className="btn-group" role="group">
							<button
								type="button"
								className="btn btn-rounded btn-dual-secondary"
								id="page-header-user-dropdown"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fa fa-user d-sm-none"></i>
								<span className="d-none d-sm-inline-block">J. Smith</span>
								<i className="fa fa-angle-down ml-5"></i>
							</button>
							<div
								className="dropdown-menu dropdown-menu-right min-width-200"
								aria-labelledby="page-header-user-dropdown"
							>
								<h5 className="h6 text-center py-10 mb-5 border-b text-uppercase">
									User
								</h5>
								<a
									className="dropdown-item"
									href="be_pages_generic_profile.html"
								>
									<i className="si si-user mr-5"></i> Profile
								</a>
								<a
									className="dropdown-item d-flex align-items-center justify-content-between"
									href="be_pages_generic_inbox.html"
								>
									<span>
										<i className="si si-envelope-open mr-5"></i> Inbox
									</span>
									<span className="badge badge-primary">3</span>
								</a>
								<a
									className="dropdown-item"
									href="be_pages_generic_invoice.html"
								>
									<i className="si si-note mr-5"></i> Invoices
								</a>
								<div className="dropdown-divider"></div>

								{/* <!-- Toggle Side Overlay --> */}
								{/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
								<a
									className="dropdown-item"
									href="/"
									data-toggle="layout"
									data-action="side_overlay_toggle"
								>
									<i className="si si-wrench mr-5"></i> Settings
								</a>
								{/* <!-- END Side Overlay --> */}

								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="op_auth_signin.html">
									<i className="si si-logout mr-5"></i> Sign Out
								</a>
							</div>
						</div>
						{/* <!-- END User Dropdown --> */}
					</div>
					{/* <!-- END Right Section --> */}
				</div>
				{/* <!-- END Header Content --> */}
			</header>
			{/* <!-- END Header --> */}
		</>
	);
};

export default Header;
