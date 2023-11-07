import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getRoles, removeRole } from "../../Slice/roleSlice";
import axios from "axios";
const User = () => {
	const navigate = useNavigate(); // Gunakan useNavigate di sini
	const dispatch = useDispatch();
	const roles = useSelector((state) => state.roles.role);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/roles")
			.then((response) => {
				dispatch(getRoles(response.data)); // Menyimpan data peran dalam state Redux.
			})
			.catch((error) => {
				console.log(error);
			});
	}, [dispatch]);

	const handleRemove = (id) => {
		try {
			axios.delete(`http://localhost:5000/api/roles/delete/${id}`);
			dispatch(removeRole({ id }));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Layout>
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
									List User
								</h1>
								<h2
									className="h4 font-w400 text-white-op invisible"
									data-toggle="appear"
									data-class="animated fadeInUp"
								>
									Management User
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="block">
					<div className="block-content block-content-full">
						<button
							type="button"
							id="addKategori"
							className="btn btn-outline-primary mb-4"
							onClick={() => {
								navigate("/role/add");
							}}
						>
							<i className="fa fa-plus"></i> Add Role
						</button>

						<table className="table table-bordered table-striped table-vcenter js-dataTable-full-pagination tableKategori">
							<thead>
								<tr>
									<th className="text-center" style={{ fontSize: "12px" }}>
										no
									</th>
									<th className="text-center">nama</th>
									<th className="text-center">action</th>
								</tr>
							</thead>
							<tbody>
								{roles.map((role,index) => (
									<tr key={role.id}>
										<td className="text-center">{index + 1}</td>
										<td className="text-center">{role.name}</td>
										<td className="text-center">
											<Link
												to={`/role/edit/${role.id}`}
												id="edit"
												type="button"
												className="edit btn btn-primary btn-sm m-1"
												tittle="Edit"
											>
												<i className="fa fa-pencil"></i>
											</Link>
											<button
												href="/"
												id="edit"
												type="button"
												className="edit btn btn-danger btn-sm m-1"
												tittle="Delete"
												onClick={() => handleRemove(role.id)}
											>
												<i className="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Layout>
		</>
	);
};
export default User;
