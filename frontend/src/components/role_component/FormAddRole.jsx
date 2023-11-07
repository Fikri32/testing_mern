import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRole } from "../../Slice/roleSlice";
import axios from "axios";

const FormAddRole = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [newRole, setRole] = useState();

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"http://localhost:5000/api/roles/create",
				{ name: newRole }
			);
			dispatch(addRole(response.data));
			setRole("");
			navigate("/role");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
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
								Management Role
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="block-header block-header-default">
					<h3 className="block-title text-center">Add Role</h3>
				</div>
				<div className="block-content">
					<div className="form-group row justify-content-center">
						<label className="col-sm-8" htmlFor="block-form-username">
							Nama Role
						</label>
						<div className="col-sm-8">
							<input
								type="text"
								className="form-control"
								id="block-form-username"
								name="block-form-username"
								placeholder="Masukan Nama Role"
								onChange={(e) => setRole(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group text-center">
						<button
							type="submit"
							className="btn btn-sm btn-alt-primary"
							onClick={handleSubmit}
						>
							<i className="fa fa-check"></i> Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormAddRole;
