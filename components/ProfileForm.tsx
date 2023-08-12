"use client";

export function ProfileForm({ user }: any) {
	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const body = {
			name: formData.get("name"),
			bio: formData.get("bio"),
			age: formData.get("age"),
			image: formData.get("image"),
		};

		const res = await fetch("/api/users", {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		console.log(data);
		
	};

	return (
		<div className="w-[50%] mx-auto" >
			<h2>Edit Your Profile</h2>
			<form onSubmit={updateUser} className="flex flex-col gap-2" >
				<label htmlFor="name" className="border-b-2 border-indigo-500" >Name</label>
				<input
					className="border-2 border-black"
					type="text"
					name="name"
					defaultValue={user?.name ?? ""}
				/>
				<label htmlFor="bio" className="border-b-2 border-indigo-500" >Bio</label>
				<textarea
					className="border-2 border-black"
					name="bio"
					cols={30}
					rows={10}
					defaultValue={user?.bio ?? ""}
				></textarea>
				<label htmlFor="age" className="border-b-2 border-indigo-500" >Age</label>
				<input type="text" name="age" defaultValue={user?.age ?? 0} className="border-2 border-black" />
				<label htmlFor="image" className="border-b-2 border-indigo-500" >Profile Image URL</label>
				<input
					className="border-2 border-black"
					type="text"
					name="image"
					defaultValue={user?.image ?? ""}
				/>

				<button type="submit" className="p-4 text-white bg-indigo-500" >Save</button>
			</form>
		</div>
	);
}
