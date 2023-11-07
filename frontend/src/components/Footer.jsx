import React from "react";
const Footer = () => {
	return (
		<>
			<footer id="page-footer" className="opacity-0">
				<div className="content py-20 font-size-xs clearfix">
					<div className="float-right">
						Crafted with <i className="fa fa-heart text-pulse"></i> by{" "}
						<a
							className="font-w600"
							href="/"
							target="_blank"
                     rel="noreferrer"
						>
							TPA NURUL ILMI
						</a>
					</div>
					<div className="float-left">
						<a
							className="font-w600"
							href="/"
							target="_blank"
                     rel="noreferrer"
						>
							TPA NURUL ILMI
						</a>{" "}
						&copy; <span className="js-year-copy"></span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer
