import React from "react";

const Welcome = () => {
	return (
		<>
			<div
				className="bg-image bg-image-bottom"
				style={{ backgroundImage: `url('/media/photos/photo34@2x.jpg')` }}
			>
				<div className="bg-primary-dark-op">
					<div className="content content-top text-center overflow-hidden">
						<div className="pt-50 pb-20">
							<h1
								className="font-w700 text-white mb-10 invisible"
								data-toggle="appear"
								data-class="animated fadeInUp"
							>
								Dashboard
							</h1>
							<h2
								className="h4 font-w400 text-white-op invisible"
								data-toggle="appear"
								data-class="animated fadeInUp"
							>
								Welcome to TPA Nurul Ilmi Dashboard!
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="row invisible" data-toggle="appear">
					{/* <!-- Row #1 --> */}
					<div className="col-6 col-xl-3">
						<a className="block block-link-pop text-right bg-primary" href="/">
							<div className="block-content block-content-full clearfix border-black-op-b border-3x">
								<div className="float-left mt-10 d-none d-sm-block">
									<i className="si si-bar-chart fa-3x text-primary-light"></i>
								</div>
								<div
									className="font-size-h3 font-w600 text-white"
									data-toggle="countTo"
									data-speed="1000"
									data-to="8900"
								>
									0
								</div>
								<div className="font-size-sm font-w600 text-uppercase text-white-op">
									Sales
								</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-xl-3">
						<a className="block block-link-pop text-right bg-earth" href="/">
							<div className="block-content block-content-full clearfix border-black-op-b border-3x">
								<div className="float-left mt-10 d-none d-sm-block">
									<i className="si si-trophy fa-3x text-earth-light"></i>
								</div>
								<div className="font-size-h3 font-w600 text-white">
									$
									<span data-toggle="countTo" data-speed="1000" data-to="2600">
										0
									</span>
								</div>
								<div className="font-size-sm font-w600 text-uppercase text-white-op">
									Earnings
								</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-xl-3">
						<a className="block block-link-pop text-right bg-elegance" href="/">
							<div className="block-content block-content-full clearfix border-black-op-b border-3x">
								<div className="float-left mt-10 d-none d-sm-block">
									<i className="si si-envelope-letter fa-3x text-elegance-light"></i>
								</div>
								<div
									className="font-size-h3 font-w600 text-white"
									data-toggle="countTo"
									data-speed="1000"
									data-to="260"
								>
									0
								</div>
								<div className="font-size-sm font-w600 text-uppercase text-white-op">
									Messages
								</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-xl-3">
						<a
							className="block block-link-pop text-right bg-corporate"
							href="/"
						>
							<div className="block-content block-content-full clearfix border-black-op-b border-3x">
								<div className="float-left mt-10 d-none d-sm-block">
									<i className="si si-fire fa-3x text-corporate-light"></i>
								</div>
								<div
									className="font-size-h3 font-w600 text-white"
									data-toggle="countTo"
									data-speed="1000"
									data-to="4252"
								>
									0
								</div>
								<div className="font-size-sm font-w600 text-uppercase text-white-op">
									Online
								</div>
							</div>
						</a>
					</div>
					{/* <!-- END Row #1 --> */}
				</div>
			</div>
		</>
	);
};

export default Welcome;
