'use client'
import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
	async function removeUser () {
		const res = await fetch('/api/users?id=' + id, {
			method: "DELETE",
		})

		const data = await res.json()

		console.log(data);
	}
	return (
		<div className="w-full flex flex-col gap-2 p-2 h-[500px] " >
			<img
				src={image ?? "/mememan.webp"}
				alt={`${name}'s profile`}
				className="w-full object-cover "
			/>
			<div className="">
				<h3>
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age || "unknown"}</p>
			</div>
			<button 
				onClick={removeUser}
				className="p-2 text-white bg-red-500 hover:bg-red-200" 
			>delete</button>
		</div>
	);
}
