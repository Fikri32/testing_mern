import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	role: [],
	isError: null,
	isSuccess: null,
	isLoading: false,
	message: "",
};

export const roleSlice = createSlice({
	name: "role",
	initialState,
	reducers: {
		addRole: (state, action) => {
			state.role.push(action.payload);
			state.isError = null;
			state.isSuccess = true;
		},
		getRoles: (state, action) => {
			state.role = action.payload;
			state.isError = null;
			state.isSuccess = true;
		},
		updateRole: (state, action) => {
			const { id, name } = action.payload;
			const roleToUpdate = state.role.find((role) => role.id === id);
			if (roleToUpdate) {
				roleToUpdate.name = name;
			}
			state.isError = null;
			state.isSuccess = true;
		},
      removeRole: (state, action) => {
         const { id } = action.payload;
         state.role = state.role.filter((role) => role.id !== id); // Menghapus peran dengan ID yang sesuai.
         state.isError = null;
         state.isSuccess = true;
       },
	},
});

export const { addRole, getRoles, updateRole ,removeRole} = roleSlice.actions;
export default roleSlice.reducer;
