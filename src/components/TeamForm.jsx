import React, { useState } from 'react';
import uuid from 'uuid/v1';

function TeamForm (props) {

	const [newMember, setNewMember] = useState({
		name: "",
		email: "",
		role: ""
	})

	const changeHandler = event => {
    console.log(event.target.value);
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

	return(
		<div>
			<h1>Team Form</h1>
			<form>

				{/* Name Field */}
				<label htmlFor="name">Name</label>
				<input 
					type="text" 
					name="name" 
					placeholder="First Name"
					vlaue={newMember.name}
					onChange={changeHandler}
					/>

				<label htmlFor="email">Email</label>
				<input 
					type="text"
					name="email"
					placeholder="myEmail@something.com"
					value={newMember.email}
					onChange={changeHandler}
				/>

				<label htmlFor="role">Role</label>
				<input 
					type="text"
					name="role"
					placeholder="Frontend Engineer"
					value={newMember.role}
					onChange={changeHandler}
				/>

				<button type="submit">Submmit</button>
			</form>
		</div>
	)
}

export default TeamForm;